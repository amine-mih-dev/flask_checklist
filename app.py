from flask import Flask
from flask import Blueprint, jsonify, url_for
from flask import render_template, request ,redirect

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///test.db"

db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(300), nullable=False)
    #description = db.Column(db.String(300), nullable=True)
    def __rep__(self):
        return '<Task %r>' % self.id

#app.register_blueprint(views, url_prefix='/views')



@app.route('/', methods=['POST','GET'])
def home():
    if request.method == 'POST':
        task_content = request.form['content']
        #task_description = request.form['Descr']
        new_task = Todo(content=task_content)

        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an error while adding the task'

    else:
        tasks = Todo.query.all()
        return render_template("index.html", tasks=tasks)


@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return "There was aan error while deleting that task"

@app.route('/update/<int:id>', methods=['GET','POST'])
def update(id):
    task = Todo.query.get_or_404(id)

    if request.method == 'POST':
        task.content = request.form['content']

        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue while updating that task'

    else:
        return render_template('update.html', task=task)

if __name__ == '__main__':
    app.run(debug=True, port = 8000)
