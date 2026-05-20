import cv2
import numpy as np
import base64


def decode_base64_image(base64_string):

    encoded_data = base64_string.split(",")[1]

    np_data = np.frombuffer(
        base64.b64decode(encoded_data),
        np.uint8
    )

    frame = cv2.imdecode(
        np_data,
        cv2.IMREAD_COLOR
    )

    return frame