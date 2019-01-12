@echo off
start "" /wait ResourceHacker -open test/generatorprize/win64/generatorprize.exe -save test/generatorprize/win64/generatorprize.exe -action addoverwrite -res docs/favicon.ico -mask ICONGROUP,IDR_MAINFRAME,
