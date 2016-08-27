#!/bin/bash
# Does not work (or more precisely works partially)!!!

if [ $# -ne 2 ]
then
	echo "Error"
	echo "Using: $0 inputFileName outputFileName.js"
fi

echo "" > $2
for LINE in `cat $1`
do
	echo "else if (hostname.indexOf('`echo "$LINE" | awk -F "##" '{print $1}'`')>-1)" >> $2
	echo "addCssToDocument('`echo "$LINE" | awk -F "##" '{print $2}'`{display: none !important;}');" >> $2
done
