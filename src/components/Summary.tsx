import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="preview-section" style={{ marginBottom: 24 }}>
      <Title level={4} style={{ fontSize: '16px', fontWeight: '600', marginBottom: 12, borderBottom: '1px solid #e0e0e0', paddingBottom: 6 }}>
        个人总结
      </Title>
      <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#333333' }}>
        {summary.split('\n').map((line: string, index: number) => (
          <p key={index} style={{ margin: '6px 0' }}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Summary;