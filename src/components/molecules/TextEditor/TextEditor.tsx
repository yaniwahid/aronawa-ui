import { CKEditor } from 'ckeditor4-react';
import React, { FC } from 'react';
import { EditorStyled } from './TextEditor.style';
import { ITextEditor } from './TextEditor.types';

const TextEditor: FC<ITextEditor> = ({
  isReadOnly,
  onChange,
  onBlur,
  data,
  onChangeSource,
  additionalConfig,
  id,
  ...props
}) => {
  const defaultConfig = {
    ignoreEmptyParagraph: true,
    allowedContent: true,
    bodyClass: id,
    title: id,
    extraPlugins: 'justify',
    toolbar: [
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
      {
        name: 'paragraph',
        items: [
          'NumberedList',
          'BulletedList',
          '-',
          'Outdent',
          'Indent',
          '-',
          'JustifyLeft',
          'JustifyCenter',
          'JustifyRight',
        ],
      },
      {
        name: 'insert',
        items: ['Link', 'Table'],
      },
      {
        name: 'clipboard',
        items: ['Undo', 'Redo'],
      },
      { name: 'document', items: ['Source'] },
    ],
    removeButtons: 'Subscript,Superscript',
    contentsCss: [
      `body {font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';padding: 4px 8px;margin: 0;font-size: 14px}`,
    ],
  };
  const handleChangeMode = (event: any) => {
    if (event.editor.mode == 'source') {
      var editable = event.editor.editable();
      editable.attachListener(editable, 'input', () => onChangeSource?.(editable.editor.getData()));
    }
  };

  return (
    <EditorStyled>
      <CKEditor
        data={data}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={isReadOnly}
        onMode={handleChangeMode}
        config={{ ...defaultConfig, ...additionalConfig }}
        {...props}
      />
    </EditorStyled>
  );
};

export default TextEditor;
