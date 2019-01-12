#define AppName 'Генератор розыгрыша призов'
#define AppVersion '1.5'
#define AppCopyright 'Copyright © 2010 all right reserved ProjectSoft && STUDIONIONS'
#define InstallText 'Удалить'
#define GitHub 'https://github.com/ProjectSoft-STUDIONIONS/rafflePrizes'
#define DirName 'LotteryGenerator'
#include AddBackslash(SourcePath) + "parseroption.iss"
[Setup]
AppId={{E71B86C4-BF18-420C-89E2-68F1546C59B7}
AppName={#AppName}
AppVersion={#AppVersion}
AppVerName={#AppVersion}
AppCopyright={#AppCopyright}
AppMutex={#AppName}
AppPublisher=ProjectSoft && STUDIONIONS
AppPublisherURL=http://studionions.ru/
AppSupportURL=http://studionions.ru/
AppContact=projectsoft2009@yandex.ru
AppComments={#AppName}
; AppUpdatesURL={#GitReleace}

VersionInfoVersion={#AppVersion}
VersionInfoCompany=ProjectSoft && STUDIONIONS
VersionInfoDescription={#AppName}. {#AppCopyright}
VersionInfoTextVersion={#AppVersion}
VersionInfoCopyright={#AppCopyright}
VersionInfoProductName={#AppName}
VersionInfoProductVersion={#AppVersion}
VersionInfoProductTextVersion={#AppName} v{#AppVersion}

DefaultDirName={pf}\{#DirName}
DefaultGroupName={#AppName}

Compression=lzma/ultra
SolidCompression=false
InternalCompressLevel=ultra
DiskSpanning=true
DiskSliceSize=151346806

OutputDir=../installer
OutputBaseFilename=data
SetupIconFile=images/favicon.ico

UninstallDisplayName={#InstallText} {#AppName}
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
AboutSetupMessage={#AppName} v{#AppVersion}.
AboutSetupNote={#AppCopyright}
[Icons]
Name: {group}\{#AppName}; Filename: {app}\generatorprize.exe
Name: {group}\Удалить {#AppName}; Filename: {uninstallexe}

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
#emit ProcessFolder('..\test\generatorprize\win64', '{app}', False, 'Is64BitInstallMode')
#emit ProcessFolder('..\test\generatorprize\win32', '{app}', 'solidbreak', 'not Is64BitInstallMode')

[Code]
#define A = (Defined UNICODE) ? "W" : "A"
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
	URL := ExpandConstant('{#GitHub}');
	ObName := TLabel(Sender).Name;
	{
  if ObName = 'GITHUB' then
	begin
		URL := ExpandConstant('{#GitHub}');
	end;
	if ObName = 'PROJECTSOFT' then
	begin
		URL := ExpandConstant('{#GitHub}');
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
		Caption := 'О программе "' + ExpandConstant('{#AppName}') + '"';
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
		Caption := ExpandConstant('{#AppName} v{#AppVersion}') + #13#10 + 'Автор: ProjectSoft<projectsoft2009@yandex.ru>' + #13#10 + 'Сайт: https://github.com/ProjectSoft-STUDIONIONS/rafflePrizes';
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
	//MsgBox('bla-bla-bla', mbInformation, MB_OK);
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
			WizardForm.DirEdit.Text := ExpandConstant('{userappdata}\{#DirName}')
		end
		else
		begin
			WizardForm.DirEdit.Text := ExpandConstant('{pf}\{#DirName}');
		end;
	end;
	Result := True;
end;
#expr SaveToFile (AddBackslash (SourcePath) + "debug.install.iss")
