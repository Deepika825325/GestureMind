import cv2
import time

# GestureMind - Day 2 Webcam Pipeline
# Open default webcam
cap = cv2.VideoCapture(0)

# Set webcam resolution
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

# Check if webcam opened successfully
if not cap.isOpened():
    print(" Error: Cannot access webcam")
    exit()

print(" Webcam started successfully")
print(" Press 'Q' to quit")

# Previous frame time for FPS calculation
prev_time = 0

while True:

    # Read frame from webcam
    success, frame = cap.read()

    # Check if frame was captured
    if not success:
        print(" Failed to grab frame")
        break

    # Flip frame horizontally (mirror effect)
    frame = cv2.flip(frame, 1)

    # Resize frame
    frame = cv2.resize(frame, (640, 480))

    # FPS Calculation

    current_time = time.time()
    fps = 1 / (current_time - prev_time)
    prev_time = current_time

    fps_text = f"FPS: {int(fps)}"

    # Add Text Overlays

    # FPS
    cv2.putText(
        frame,
        fps_text,
        (20, 40),
        cv2.FONT_HERSHEY_SIMPLEX,
        1,
        (0, 255, 0),
        2
    )

    # Project Title
    cv2.putText(
        frame,
        "GestureMind - Webcam Pipeline",
        (20, 80),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.8,
        (255, 255, 255),
        2
    )

    # Resolution
    cv2.putText(
        frame,
        "Resolution: 640x480",
        (20, 120),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.7,
        (255, 255, 0),
        2
    )

    # Display Frame
    cv2.imshow("GestureMind AI Camera", frame)
    
    # Exit Condition

    key = cv2.waitKey(1)

    if key & 0xFF == ord("q"):
        print("Exiting webcam...")
        break
# Cleanup
cap.release()
cv2.destroyAllWindows()

print("Webcam closed successfully")