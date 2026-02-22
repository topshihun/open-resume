import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface SkillsProps {
  skills: string;
  backendSkills: string;
}

const Skills: React.FC<SkillsProps> = ({ skills, backendSkills }) => {
  if (!skills && !backendSkills) return null;

  return (
    <div className="preview-section" style={{ marginBottom: 24 }}>
      <Title level={4} style={{ fontSize: '16px', fontWeight: '600', marginBottom: 12, borderBottom: '1px solid #e0e0e0', paddingBottom: 6 }}>
        技术能力
      </Title>
      <div style={{ fontSize: '13px', color: '#333333' }}>
        {skills && (
          <div style={{ marginBottom: 8 }}>
            <strong style={{ marginBottom: 4, display: 'block' }}>前端：</strong>
            <span>{skills}</span>
          </div>
        )}
        <div>
          <strong style={{ marginBottom: 4, display: 'block' }}>后端：</strong>
          <span>{backendSkills || '暂无'}</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;