def compareVersions(v1, v2):
    splitedVersionOne = v1.split(".")
    splitedVersionTwo = v2.split(".")

    splitedVersionOne = [int(i) for i in splitedVersionOne]
    splitedVersionTwo = [int(i) for i in splitedVersionTwo]

    for index in range(len(splitedVersionOne)):
        if splitedVersionOne[index] > splitedVersionTwo[index]:
            return 1
        elif splitedVersionTwo[index] > splitedVersionOne[index]:
            return -1
    return 0


print(compareVersions('0.4.2', '0.4.2'))
