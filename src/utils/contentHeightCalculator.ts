import type { ResumeData } from '../types';

/**
 * 内容高度估算配置
 */
const HEIGHT_ESTIMATES = {
  header: 100,
  contactSection: 50,
  contactItem: 25,
  sectionHeader: 40,
  paragraph: (text: string) => Math.ceil(text.split('\n').length * 20 + 20),
  experienceItem: (exp: any) => {
    const baseHeight = 80;
    const descHeight = exp.description ? Math.ceil(exp.description.split('\n').length * 20 + 10) : 0;
    return baseHeight + descHeight;
  },
  educationItem: (edu: any) => {
    const baseHeight = 80;
    const descHeight = edu.description ? Math.ceil(edu.description.split('\n').length * 20 + 10) : 0;
    return baseHeight + descHeight;
  },
  projectItem: (project: any) => {
    const baseHeight = 60;
    const descHeight = project.description ? Math.ceil(project.description.split('\n').length * 20 + 10) : 0;
    return baseHeight + descHeight;
  },
  skillsSection: 60
};

/**
 * 计算简历内容总高度
 */
export const calculateContentHeight = (data: ResumeData): number => {
  let totalHeight = 0;
  
  // 头部信息
  totalHeight += HEIGHT_ESTIMATES.header;
  
  // 联系方式
  if (data.contacts && Array.isArray(data.contacts) && data.contacts.length > 0) {
    const contactItems = data.contacts.filter((contact) => contact?.value).length;
    totalHeight += HEIGHT_ESTIMATES.contactSection + (contactItems * HEIGHT_ESTIMATES.contactItem);
  }
  
  // 个人简介
  if (data.summary) {
    totalHeight += HEIGHT_ESTIMATES.sectionHeader + HEIGHT_ESTIMATES.paragraph(data.summary);
  }
  
  // 工作经历
  if (data.experience && Array.isArray(data.experience) && data.experience.length > 0) {
    totalHeight += data.experience.reduce((total, exp) => 
      total + HEIGHT_ESTIMATES.experienceItem(exp), HEIGHT_ESTIMATES.sectionHeader);
  }
  
  // 教育背景
  if (data.education && Array.isArray(data.education) && data.education.length > 0) {
    totalHeight += data.education.reduce((total, edu) => 
      total + HEIGHT_ESTIMATES.educationItem(edu), HEIGHT_ESTIMATES.sectionHeader);
  }
  
  // 技能
  if (data.skills && Array.isArray(data.skills) && data.skills.length > 0) {
    totalHeight += HEIGHT_ESTIMATES.sectionHeader + (data.skills.length * 30);
  }
  
  // 项目经历
  if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
    totalHeight += data.projects.reduce((total, project) => 
      total + HEIGHT_ESTIMATES.projectItem(project), HEIGHT_ESTIMATES.sectionHeader);
  }
  
  return totalHeight;
};

/**
 * 检查内容是否超过单页限制
 */
export const checkContentExceedsLimit = (data: ResumeData): boolean => {
  const totalHeight = calculateContentHeight(data);
  const A4_CONTENT_HEIGHT_PX = 1123 - 30; // A4高度减去新的边距(15mm*2 = 30mm)
  return totalHeight > A4_CONTENT_HEIGHT_PX;
};