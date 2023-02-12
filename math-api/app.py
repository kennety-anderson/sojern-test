from flask import Flask, request, jsonify
import numpy as np
import statistics

app = Flask("math-api")

@app.route("/min", methods=["POST"])
def minEndpoint():
    result = []

    request_data = request.get_json()
    numbersList = request_data["list"]

    minNumber = min(numbersList)

    for i in numbersList:
      if (i == minNumber ):
        result.append(i)

    return jsonify({"minList": result})

@app.route("/max", methods=["POST"])
def maxEndpoint():
    result = []

    request_data = request.get_json()
    numbersList = request_data["list"]

    maxNumber = max(numbersList)

    for i in numbersList:
      if (i == maxNumber ):
        result.append(i)

    return jsonify({"maxList": result})

@app.route("/avg", methods=["POST"])
def avgEndpoint():
    request_data = request.get_json()
    numbersList = request_data["list"]

    result = sum(numbersList)/len(numbersList)

    return jsonify({"average": result})

@app.route("/median", methods=["POST"])
def medianEndpoint():
    request_data = request.get_json()
    numbersList = request_data["list"]

    result = statistics.median(numbersList)

    return jsonify({"average": result})

@app.route("/percentile", methods=["POST"])
def percentileEndpoint():
    request_data = request.get_json()
    numbersList = request_data["list"]
    quantifier = request_data["q"]

    result = np.percentile(numbersList, quantifier)

    return jsonify({"percentile": result})

