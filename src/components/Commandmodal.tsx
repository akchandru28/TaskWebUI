import React from 'react';
import { Modal, Typography } from 'antd';

const { Paragraph, Title } = Typography;

interface CommandModalProps {
  visible: boolean;
  onClose: () => void;
  taskName: string;
  output: string;
}

const Commandmodal: React.FC<CommandModalProps> = ({
  visible,
  onClose,
  taskName,
  output,
}) => {
  return (
    <Modal
      title={`Command Output - ${taskName}`}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={700}
    >
      <Paragraph>
        <pre
          style={{
            backgroundColor: '#f5f5f5',
            padding: '12px',
            borderRadius: '6px',
            maxHeight: '300px',
            overflowY: 'auto',
            fontFamily: 'monospace',
          }}
        >
          {output || 'No output to display.'}
        </pre>
      </Paragraph>
    </Modal>
  );
};

export default Commandmodal;
