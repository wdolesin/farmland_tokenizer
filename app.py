from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/create_crowdsale')
def create_crowdsale():
    return render_template("create_crowdsale.html")

@app.route('/purchase_tokens')
def purchase_tokens():
    return render_template("purchase_tokens.html")

if __name__ == "__main__":
    app.run()