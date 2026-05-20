import cv2
import mediapipe as mp

mp_hands = mp.solutions.hands

hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)


def detect_hand_landmarks(frame):

    rgb_frame = cv2.cvtColor(
        frame,
        cv2.COLOR_BGR2RGB
    )

    results = hands.process(rgb_frame)

    landmark_list = []

    if results.multi_hand_landmarks:

        for hand_landmarks in results.multi_hand_landmarks:

            for landmark in hand_landmarks.landmark:

                landmark_list.append({
                    "x": landmark.x,
                    "y": landmark.y,
                    "z": landmark.z,
                })

    return landmark_list