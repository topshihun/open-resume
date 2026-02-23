import type { ResumeData } from '../types';

/**
 * 生成简历预览HTML内容
 */
export const generatePreviewHTML = (data: ResumeData): string => {
  return `
    <div style="font-family: 'Microsoft YaHei', Arial, sans-serif; line-height: 1.6;">
      <!-- 头部信息 -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <div>
          <h1 style="margin: 0; font-size: 24px; color: #333;">${data.name || ''}</h1>
          <p style="margin: 5px 0 0 0; font-size: 16px; color: #666;">${data.title || ''}</p>
        </div>
        ${data.photo ? `<img src="${data.photo}" style="width: 80px; height: 80px; border-radius: 4px; object-fit: cover;" />` : ''}
      </div>
      
      <!-- 联系方式 -->
      ${data.contacts && data.contacts && data.contacts.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #333; border-bottom: 2px solid #1890ff; padding-bottom: 5px;">联系方式</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${data.contacts.map((contact) => 
              contact.value ? `
                <div style="display: flex; align-items: center;">
                  <span style="font-weight: bold; margin-right: 5px;">${contact.type}:</span>
                  ${contact.isLink ? 
                    `<a href="${contact.value.startsWith('http') ? '' : 'https://'}${contact.value}" style="color: #1890ff; text-decoration: none;">${contact.value}</a>` : 
                    `<span>${contact.value}</span>`
                  }
                </div>
              ` : ''
            ).join('')}
          </div>
        </div>
      ` : ''}
      
      <!-- 个人简介 -->
      ${data.summary ? `
        <div style="margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #333; border-bottom: 2px solid #1890ff; padding-bottom: 5px;">个人简介</h3>
          <p style="margin: 0; white-space: pre-line;">${data.summary}</p>
        </div>
      ` : ''}
      
      <!-- 工作经历 -->
      ${data.experience && Array.isArray(data.experience) && data.experience.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #333; border-bottom: 2px solid #1890ff; padding-bottom: 5px;">工作经历</h3>
          ${data.experience.map((exp) => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <strong style="font-size: 14px;">${exp.company || ''}</strong>
                <span style="color: #666;">${exp.period || ''}</span>
              </div>
              <div style="color: #1890ff; margin-bottom: 5px;">${exp.position || ''}</div>
              <p style="margin: 0; white-space: pre-line; font-size: 13px;">${exp.description || ''}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      <!-- 教育背景 -->
      ${data.education && Array.isArray(data.education) && data.education.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #333; border-bottom: 2px solid #1890ff; padding-bottom: 5px;">教育背景</h3>
          ${data.education.map((edu) => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <strong style="font-size: 14px;">${edu.school || ''}</strong>
                <span style="color: #666;">${edu.period || ''}</span>
              </div>
              <div style="color: #1890ff; margin-bottom: 5px;">${edu.major || ''} | ${edu.degree || ''}</div>
              <p style="margin: 0; white-space: pre-line; font-size: 13px;">${edu.description || ''}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      <!-- 技能 -->
      <div style="margin-bottom: 20px;">
        <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #333; border-bottom: 2px solid #1890ff; padding-bottom: 5px;">技能</h3>
        ${data.skills ? `
          <div style="margin-bottom: 10px;">
            <strong>前端:</strong> ${data.skills}
          </div>
        ` : ''}
        ${data.backendSkills ? `
          <div>
            <strong>后端:</strong> ${data.backendSkills}
          </div>
        ` : ''}
      </div>
      
      <!-- 项目经历 -->
      ${data.projects && Array.isArray(data.projects) && data.projects.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #333; border-bottom: 2px solid #1890ff; padding-bottom: 5px;">项目经历</h3>
          ${data.projects.map((project) => `
            <div style="margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <strong style="font-size: 14px;">${project.name || ''}</strong>
                <span style="color: #666;">${project.period || ''}</span>
              </div>
              <p style="margin: 0; white-space: pre-line; font-size: 13px;">${project.description || ''}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
};

/**
 * 生成单页PDF的完整HTML文档
 */
export const generateSinglePageHTML = (data: ResumeData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            width: 210mm; 
            min-height: 297mm; 
            background: white;
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            box-sizing: border-box;
            transform: none !important;
            zoom: 1 !important;
            overflow: auto; /* 允许body滚动 */
          }
          #a4-content {
            width: 210mm;
            min-height: 297mm;
            padding: 20mm;
            box-sizing: border-box;
            background: white;
            overflow: visible; /* 允许内容区域显示完整内容 */
          }
          html {
            overflow: auto; /* 允许html滚动 */
          }
        </style>
      </head>
      <body>
        <div id="a4-content">
          ${generatePreviewHTML(data)}
        </div>
      </body>
    </html>
  `;
};