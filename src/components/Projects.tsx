import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface ProjectItem {
  name: string;
  period: string;
  description: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="preview-section">
      <Title level={4} style={{ fontSize: '16px', fontWeight: '600', marginBottom: 12, borderBottom: '1px solid #e0e0e0', paddingBottom: 6 }}>
        项目经历
      </Title>
      {projects.map((item, index) => (
        <div key={index} style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <strong style={{ fontSize: '14px', color: '#000000' }}>{item.name || '项目名称'}</strong>
            <span style={{ fontSize: '12px', color: '#666666' }}>{item.period || '时间'}</span>
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

export default Projects;