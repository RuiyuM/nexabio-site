"""Generate the poster QR from the canonical live responder link."""
import json
from pathlib import Path
import qrcode
import qrcode.image.svg

root = Path(__file__).resolve().parent
url = json.loads((root.parent / 'forms/links.json').read_text())['responderUrl']
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=16, border=4)
qr.add_data(url)
qr.make(fit=True)
qr.make_image(fill_color='black', back_color='white').save(root / 'qr-code.png')
qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(root / 'qr-code.svg')
print('QR generated for', url)
