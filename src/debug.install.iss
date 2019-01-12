; BEGIN ISPPBUILTINS.ISS
; END ISPPBUILTINS.ISS
[Setup]
AppId={{E71B86C4-BF18-420C-89E2-68F1546C59B7}
AppName=Генератор розыгрыша призов
AppVersion=1.5
AppVerName=1.5
AppCopyright=Copyright © 2010 all right reserved ProjectSoft && STUDIONIONS
AppMutex=Генератор розыгрыша призов
AppPublisher=ProjectSoft && STUDIONIONS
AppPublisherURL=http://studionions.ru/
AppSupportURL=http://studionions.ru/
AppContact=projectsoft2009@yandex.ru
AppComments=Генератор розыгрыша призов
; AppUpdatesURL={#GitReleace}
VersionInfoVersion=1.5
VersionInfoCompany=ProjectSoft && STUDIONIONS
VersionInfoDescription=Генератор розыгрыша призов. Copyright © 2010 all right reserved ProjectSoft && STUDIONIONS
VersionInfoTextVersion=1.5
VersionInfoCopyright=Copyright © 2010 all right reserved ProjectSoft && STUDIONIONS
VersionInfoProductName=Генератор розыгрыша призов
VersionInfoProductVersion=1.5
VersionInfoProductTextVersion=Генератор розыгрыша призов v1.5
DefaultDirName={pf}\LotteryGenerator
DefaultGroupName=Генератор розыгрыша призов
Compression=lzma/ultra
SolidCompression=false
InternalCompressLevel=ultra
DiskSpanning=true
DiskSliceSize=151346806
OutputDir=../installer
OutputBaseFilename=data
SetupIconFile=images/favicon.ico
UninstallDisplayName=Удалить Генератор розыгрыша призов
UninstallDisplayIcon={uninstallexe}
DisableWelcomePage=False
DisableReadyPage=true
DisableReadyMemo=true
DisableFinishedPage=false
FlatComponentsList=false
AlwaysShowComponentsList=false
ShowComponentSizes=false
WindowShowCaption=false
WindowResizable=false
UsePreviousAppDir=false
UsePreviousGroup=false
AppendDefaultDirName=false
BackSolid=true
WindowStartMaximized=false
DisableProgramGroupPage=true
DisableDirPage=true
ShowLanguageDialog=no
; ArchitecturesInstallIn64BitMode=x64 запрашивает, чтобы установка была выполнена
; в 64-битном режиме. Это означает, что она должна использовать собственный
; каталог 64-битных программных файлов и 64-битное представление реестра.
; А во всех остальных архитектурах он будет установлен в 32-битном режиме.
; Примечание: мы не устанавливаем ProcessorsAllowed, потому что мы хотим,
; чтобы эта установка работала на всех архитектурах.
ArchitecturesInstallIn64BitMode=x64
[Languages]
Name: russian; MessagesFile: compiler:Languages\Russian.isl
[Messages]
AboutSetupMenuItem=&© ProjectSoft 2018
AboutSetupMenuItem=&О программе...
AboutSetupTitle=О программе
AboutSetupMessage=Генератор розыгрыша призов v1.5.
AboutSetupNote=Copyright © 2010 all right reserved ProjectSoft && STUDIONIONS
[Icons]
Name: {group}\Генератор розыгрыша призов; Filename: {app}\generatorprize.exe
Name: {group}\Удалить Генератор розыгрыша призов; Filename: {uninstallexe}
[Dirs]
Name: {app}\locales
Name: {app}\pnacl
Name: {app}\swiftshader
[UninstallDelete]
Name: {app}\; Type: filesandordirs
[Files]
Source: embed\dialog.bmp; DestDir: {tmp}; Flags: dontcopy
; Source: dlls\InnoCallback.dll; DestDir: {tmp}; Flags: dontcopy
Source: dlls\CallbackCtrl.dll; DestDir: {tmp}; Flags: dontcopy
Source: "..\test\generatorprize\win64\credits.html"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\d3dcompiler_47.dll"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\ffmpeg.dll"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\generatorprize.exe"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\icudtl.dat"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\libEGL.dll"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\libGLESv2.dll"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\am.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\am.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ar.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ar.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\bg.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\bg.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\bn.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\bn.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ca.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ca.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\cs.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\cs.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\da.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\da.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\de.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\de.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\el.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\el.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\en-GB.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\en-GB.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\en-US.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\en-US.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\es-419.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\es-419.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\es.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\es.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\et.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\et.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fa.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fa.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fi.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fi.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fil.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fil.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fr.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\fr.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\gu.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\gu.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\he.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\he.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\hi.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\hi.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\hr.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\hr.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\hu.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\hu.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\id.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\id.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\it.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\it.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ja.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ja.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\kn.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\kn.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ko.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ko.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\lt.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\lt.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\lv.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\lv.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ml.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ml.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\mr.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\mr.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ms.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ms.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\nb.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\nb.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\nl.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\nl.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\pl.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\pl.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\pt-BR.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\pt-BR.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\pt-PT.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\pt-PT.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ro.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ro.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ru.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ru.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sk.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sk.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sl.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sl.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sr.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sr.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sv.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sv.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sw.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\sw.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ta.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\ta.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\te.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\te.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\th.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\th.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\tr.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\tr.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\uk.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\uk.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\vi.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\vi.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\zh-CN.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\zh-CN.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\zh-TW.pak"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\locales\zh-TW.pak.info"; DestDir: {app}\locales; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\natives_blob.bin"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\node.dll"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\notification_helper.exe"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\nw.dll"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\nw_100_percent.pak"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\nw_200_percent.pak"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\nw_elf.dll"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\resources.pak"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\swiftshader\libEGL.dll"; DestDir: {app}\swiftshader; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\swiftshader\libGLESv2.dll"; DestDir: {app}\swiftshader; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win64\v8_context_snapshot.bin"; DestDir: {app}; Check: Is64BitInstallMode
Source: "..\test\generatorprize\win32\credits.html"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\d3dcompiler_47.dll"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\ffmpeg.dll"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\generatorprize.exe"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\icudtl.dat"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\libEGL.dll"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\libGLESv2.dll"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\am.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\am.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ar.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ar.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\bg.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\bg.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\bn.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\bn.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ca.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ca.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\cs.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\cs.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\da.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\da.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\de.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\de.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\el.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\el.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\en-GB.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\en-GB.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\en-US.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\en-US.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\es-419.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\es-419.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\es.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\es.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\et.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\et.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fa.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fa.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fi.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fi.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fil.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fil.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fr.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\fr.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\gu.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\gu.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\he.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\he.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\hi.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\hi.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\hr.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\hr.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\hu.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\hu.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\id.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\id.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\it.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\it.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ja.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ja.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\kn.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\kn.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ko.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ko.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\lt.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\lt.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\lv.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\lv.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ml.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ml.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\mr.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\mr.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ms.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ms.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\nb.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\nb.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\nl.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\nl.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\pl.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\pl.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\pt-BR.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\pt-BR.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\pt-PT.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\pt-PT.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ro.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ro.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ru.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ru.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sk.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sk.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sl.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sl.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sr.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sr.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sv.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sv.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sw.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\sw.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ta.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\ta.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\te.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\te.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\th.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\th.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\tr.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\tr.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\uk.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\uk.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\vi.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\vi.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\zh-CN.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\zh-CN.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\zh-TW.pak"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\locales\zh-TW.pak.info"; DestDir: {app}\locales; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\natives_blob.bin"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\node.dll"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\notification_helper.exe"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\nw.dll"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\nw_100_percent.pak"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\nw_200_percent.pak"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\nw_elf.dll"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\resources.pak"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\swiftshader\libEGL.dll"; DestDir: {app}\swiftshader; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\swiftshader\libGLESv2.dll"; DestDir: {app}\swiftshader; Flags: solidbreak; Check: not Is64BitInstallMode
Source: "..\test\generatorprize\win32\v8_context_snapshot.bin"; DestDir: {app}; Flags: solidbreak; Check: not Is64BitInstallMode
[Code]
type
	TWFProc = function(h:hWnd;Msg,wParam,lParam:Longint):Longint;
function CallWindowProc(lpPrevWndFunc: Longint; hWnd: HWND; Msg: UINT; wParam: Longint; lParam: Longint): Longint; external 'CallWindowProcA@user32.dll stdcall';
function SetWindowLong(Wnd: HWnd; Index: Integer; NewLong: Longint): Longint; external 'SetWindowLongA@user32.dll stdcall';
function WrapWFProc(Callback: TWFProc; ParamCount: Integer): Longword; external 'wrapcallbackaddr@files:CallbackCtrl.dll stdcall';
var
	OldProc:Longint;
	OptionPage: TInputOptionWizardPage;
procedure labelHandle(Sender: TObject);
var
	ErrorCode: Integer;
	URL, ObName: String;
begin
	URL := ExpandConstant('https://github.com/ProjectSoft-STUDIONIONS/rafflePrizes');
	ObName := TLabel(Sender).Name;
	{
  if ObName = 'GITHUB' then
	begin
		URL := ExpandConstant('https://github.com/ProjectSoft-STUDIONIONS/rafflePrizes');
	end;
	if ObName = 'PROJECTSOFT' then
	begin
		URL := ExpandConstant('https://github.com/ProjectSoft-STUDIONIONS/rafflePrizes');
	end;
  }
	ShellExec('open', URL,'', '', SW_SHOWNORMAL, ewNoWait, ErrorCode);
end;
procedure MyMessageBoxWithoutCloseButton;
var
	Form: TSetupForm;
	Label1: TLabel;
begin
	Form := CreateCustomForm;
	Form.BorderStyle := bsDialog;
	with Form do
	begin
		Position := poScreenCenter;
		ClientWidth := ScaleX(500);
		ClientHeight := ScaleY(200);
		BorderIcons := [biSystemMenu];
		Caption := 'О программе "' + ExpandConstant('Генератор розыгрыша призов') + '"';
	end;
	with TBitmapImage.Create(Form) do
	begin
		Stretch  := True;
		Bitmap.LoadFromFile(ExpandConstant('{tmp}')+'\dialog.bmp');
		Center  := True;
		Parent := Form;
		Top := 0;
		Left := 0;
		Width := Form.ClientWidth;
		Height := ScaleY(150);
	end;
	Label1 := TLabel.Create(Form);
	with Label1 do
	begin
		Parent := Form;
		Left := ScaleY(150) + ScaleX(16);
		Top := ScaleX(36);
		Font.Color := clWhite;
		AutoSize := True;
		Width := Form.ClientWidth - ScaleY(150) - ScaleX(16);
		Height := Form.ClientHeight - ScaleY(24) - ScaleY(8);
		WordWrap := False;
		Transparent := True;
		Caption := ExpandConstant('Генератор розыгрыша призов v1.5') + #13#10 + 'Автор: ProjectSoft<projectsoft2009@yandex.ru>' + #13#10 + 'Сайт: https://github.com/ProjectSoft-STUDIONIONS/rafflePrizes';
	end;
	with TLabel.Create(Form) do
	begin
		Parent := Form;
		Caption := 'https://github.com/ProjectSoft-STUDIONIONS/rafflePrizes';
		AutoSize := True;
		Font.Color := clWhite;
		Font.Style := [fsUnderline];
		WordWrap := False;
		Transparent := True;
		Left := Label1.Left + Label1.Width - Width;
		Top := Label1.Top + Label1.Height - Height;
		OnClick := @labelHandle;
	end;
	with TNewButton.Create(Form) do
	begin
		Parent := Form;
		Width := ScaleX(80);
		Height := ScaleY(24);
		Left := Form.ClientWidth - Width - ScaleX(8);
		Top := Form.ClientHeight - Height - ScaleY(8);
		Caption := 'ОК';
		ModalResult := mrOK;
	end;
	Form.ShowModal;
end;
procedure AboutSetupClick;
begin
	MyMessageBoxWithoutCloseButton();
end;
function WFWndProc(h:HWND;Msg,wParam,lParam:Longint):Longint;
begin
	if (Msg=$112) and (wParam=9999) then
	begin
		Result:=0;
		AboutSetupClick;
	end
	else
	begin
		if Msg=$2 then
			SetWindowLong(WizardForm.Handle,-4,OldProc);
		Result:=CallWindowProc(OldProc,h,Msg,wParam,lParam);
	end;
end;
procedure InitializeWizard;
begin
	ExtractTemporaryFile('dialog.bmp');
	OldProc:=SetWindowLong(WizardForm.Handle,-4,WrapWFProc(@WFWndProc,4));
	OptionPage := CreateInputOptionPage(wpWelcome,
		'Choose installation options', 'Who should this application be installed for?',
		'Please select whether you wish to make this software available for all users or ' +
		'just yourself.', True, False);
	OptionPage.Add('&Установить для всех пользователей');
	OptionPage.Add('&Установить только для меня');
	if IsAdminLoggedOn then
	begin
		OptionPage.Values[0] := True;
	end
	else
	begin
		OptionPage.Values[1] := True;
		OptionPage.CheckListBox.ItemEnabled[0] := False;
	end;
end;
function NextButtonClick(CurPageID: Integer): Boolean;
begin
	if CurPageID = OptionPage.ID then
	begin
		if OptionPage.Values[1] then
		begin
			WizardForm.DirEdit.Text := ExpandConstant('{userappdata}\LotteryGenerator')
		end
		else
		begin
			WizardForm.DirEdit.Text := ExpandConstant('{pf}\LotteryGenerator');
		end;
	end;
	Result := True;
end;
