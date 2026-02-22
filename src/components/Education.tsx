import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface EducationItem {
  school: string;
  major: string;
  degree: string;
  period: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <div className="preview-section" style={{ marginBottom: 24 }}>
      <Title level={4} style={{ fontSize: '16px', fontWeight: '600', marginBottom: 12, borderBottom: '1px solid #e0e0e0', paddingBottom: 6 }}>
        教育经历
      </Title>
      {education.map((item, index) => (
        <div key={index} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <strong style={{ fontSize: '14px', color: '#000000' }}>{item.school || '学校'}</strong>
            <span style={{ fontSize: '12px', color: '#666666' }}>{item.period || '时间'}</span>
          </div>
          <div style={{ fontSize: '13px', color: '#333333', marginBottom: 4 }}>
            {item.major || '专业'} - {item.degree || '学历'}
          </div>
          {item.description && (
            <div style={{ fontSize: '12px', color: '#666666', lineHeight: '1.5' }}>
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;