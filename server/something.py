import pytesseract
from PIL import Image

def detect_text(image_path):
    # Open the image using PIL (Python Imaging Library)
    image = Image.open(image_path)
        
    # Use Tesseract to extract text from the image
    text = pytesseract.image_to_string(image)
        
    return text
    

if __name__ == "__main__":
    pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'
    image_path = "server/public/assets/save.png"
    detected_text = detect_text(image_path)
    
    if detected_text:
        print("Detected Text:")
        print(detected_text)
    else:
        print("No text detected or an error occurred.")