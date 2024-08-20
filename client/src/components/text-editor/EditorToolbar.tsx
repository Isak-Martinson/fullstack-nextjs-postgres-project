import React from 'react';
import { Editor, extensions } from '@tiptap/react';
import {
  RiBold,
  RiItalic,
  RiHeading,
  RiCodeBlock,
  RiDoubleQuotesR,
  RiListUnordered,
} from '@remixicon/react';

type EditorToolbarProps = {
  editor: Editor | null;
};

const EditorToolbar: React.FC<EditorToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='flex flex-row w-full'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          editor.isActive('heading') ||
          editor.isActive('codeBlock') ||
          !editor.can().chain().focus().toggleBold().run()
        }
        className={
          editor.isActive('bold') ? 'is-active editor-button' : 'editor-button'
        }
      >
        <RiBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          editor.isActive('heading') ||
          editor.isActive('codeBlock') ||
          !editor.can().chain().focus().toggleItalic().run()
        }
        className={
          editor.isActive('italic')
            ? 'is-active editor-button'
            : 'editor-button'
        }
      >
        <RiItalic />
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .selectParentNode()
            .unsetBold()
            .unsetItalic()
            .unsetBlockquote()
            .toggleHeading({ level: 2 })
            .run()
        }
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={
          editor.isActive('heading')
            ? 'is-active editor-button'
            : 'editor-button'
        }
      >
        <RiHeading />
      </button>
      <button
        onClick={() => {
          if (editor.isActive('blockquote')) {
            editor.chain().focus().setParagraph().run();
          } else {
            editor.chain().focus().clearNodes().toggleBlockquote().run();
          }
        }}
        disabled={
          editor.isActive('codeBlock') ||
          !editor.can().chain().focus().toggleBlockquote().run()
        }
        className={
          editor.isActive('blockquote')
            ? 'is-active editor-button'
            : 'editor-button'
        }
      >
        <RiDoubleQuotesR />
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .selectParentNode()
            .unsetBlockquote()
            .toggleBulletList()
            .run()
        }
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList')
            ? 'is-active editor-button'
            : 'editor-button'
        }
      >
        <RiListUnordered />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().unsetBlockquote().toggleCodeBlock().run()
        }
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive('codeBlock')
            ? 'is-active editor-button'
            : 'editor-button'
        }
      >
        <RiCodeBlock />
      </button>
      <button>post</button>
    </div>
  );
};
export default EditorToolbar;
