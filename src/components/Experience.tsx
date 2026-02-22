import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <div className="preview-section" style={{ marginBottom: 24 }}>
      <Title level={4} style={{ fontSize: '16px', fontWeight: '600', marginBottom: 12, borderBottom: '1px solid #e0e0e0', paddingBottom: 6 }}>
        工作经历
      </Title>
      {experience.map((item, index) => (
        <div key={index} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <strong style={{ fontSize: '14px', color: '#000000' }}>{item.company || '公司名称'}</strong>
            <span style={{ fontSize: '12px', color: '#666666' }}>{item.period || '工作时间'}</span>
          </div>
          <div style={{ fontSize: '13px', color: '#333333', marginBottom: 6 }}>
            {item.position || '职位'}
          </div>
          {item.description && (
            <div style={{ fontSize: '12px', color: '#666666', lineHeight: '1.5' }}>
              {item.description.split('\n').map((line: string, lineIndex: number) => (
                <p key={lineIndex} style={{ margin: '4px 0', textIndent: '12px' }}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;