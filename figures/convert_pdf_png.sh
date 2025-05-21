#!/bin/bash

# Check if filename stem is provided
if [ -z "$1" ]; then
    echo "Error: Please provide the PDF filename stem (without .pdf extension)."
    echo "Usage: $0 <filename_stem>"
    exit 1
fi

INPUT_PDF="$1.pdf"
OUTPUT_PNG="$1.png"

# Check if the PDF file exists
if [ ! -f "$INPUT_PDF" ]; then
    echo "Error: File '$INPUT_PDF' not found!"
    exit 1
fi

# Convert PDF to PNG using Inkscape
echo "Converting $INPUT_PDF to $OUTPUT_PNG ..."
flatpak run org.inkscape.Inkscape \
    --export-type=png \
    --export-filename="$OUTPUT_PNG" \
    --export-dpi=600 \
    "$INPUT_PDF"

# Check if conversion succeeded
if [ $? -eq 0 ]; then
    echo "Success: PNG saved as $OUTPUT_PNG"
else
    echo "Error: Conversion failed!"
    exit 1
fi
