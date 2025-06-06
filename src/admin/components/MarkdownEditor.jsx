import React, { useState, useEffect } from 'react';
import { Input, Button, Space, Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const { TextArea } = Input;

const EditorContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const EditorPanel = styled.div`
  flex: 1;
`;

const PreviewPanel = styled(Card)`
  flex: 1;
`;

// 修改组件以支持 Form.Item
const MarkdownEditor = ({ value, onChange, initialValue = '', onSave }) => {
  const [content, setContent] = useState(value || initialValue);

  // 当外部 value 改变时更新内部状态
  useEffect(() => {
    if (value !== undefined) {
      setContent(value);
    }
  }, [value]);

  const handleChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    // 通知 Form.Item 值已改变
    onChange && onChange(newContent);
  };

  const handleSave = () => {
    onSave && onSave(content);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <EditorContainer>
        <EditorPanel>
          <TextArea
            rows={20}
            value={content}
            onChange={handleChange}
            placeholder="请输入Markdown内容..."
          />
        </EditorPanel>
        <PreviewPanel title="预览">
          <ReactMarkdown>{content}</ReactMarkdown>
        </PreviewPanel>
      </EditorContainer>
      {onSave && (
        <Button type="primary" onClick={handleSave}>
          保存
        </Button>
      )}
    </Space>
  );
};

export default MarkdownEditor;