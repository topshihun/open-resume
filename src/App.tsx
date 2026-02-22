import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Typography, Card, Form, Divider, Space, Switch } from 'antd';
import { DownloadOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './index.css';

// 导入组件
import PhotoUpload from './components/PhotoUpload';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

function App() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [previewData, setPreviewData] = useState<any>({});
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  
  // 同步滚动条
  useEffect(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;
    
    if (leftElement && rightElement) {
      const handleLeftScroll = () => {
        rightElement.scrollTop = leftElement.scrollTop;
      };
      
      const handleRightScroll = () => {
        leftElement.scrollTop = rightElement.scrollTop;
      };
      
      leftElement.addEventListener('scroll', handleLeftScroll);
      rightElement.addEventListener('scroll', handleRightScroll);
      
      return () => {
        leftElement.removeEventListener('scroll', handleLeftScroll);
        rightElement.removeEventListener('scroll', handleRightScroll);
      };
    }
  }, []);
  
  // 照片上传处理
  const handlePhotoChange = (value: string) => {
    form.setFieldsValue({ photo: value });
  };
  
  // 实时更新预览数据
  const handleFormChange = (_: any, allValues: any) => {
    setPreviewData(allValues);
  };
  
  // 初始加载时获取一次值
  useEffect(() => {
    const initialValues = form.getFieldsValue();
    setPreviewData(initialValues);
  }, [form]);
  
  // 导出PDF功能
  const exportPDF = async () => {
    setLoading(true);
    try {
      const content = document.getElementById('resume-preview');
      if (content) {
        const canvas = await html2canvas(content, {
          scale: 2,
          useCORS: true,
          logging: false,
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });
        
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('resume.pdf');
      }
    } catch (error) {
      console.error('导出PDF失败:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // 默认表单值
  const defaultValues = {
    name: '张三',
    title: '前端开发工程师',
    photo: '',
    summary: '本人乐观开朗，在校成绩优异，自律能力强，具有良好的沟通能力和团队合作精神，可以使用英语进行工作交流。\n具有多年前端开发经验，熟悉React、Vue等前端框架，善于技术学习，持续关注互联网技术发展。\n求职意向：前端开发相关工作。',
    contacts: [
      { type: '邮箱', value: 'zhangsan@example.com', isLink: true },
      { type: '电话', value: '13800138000', isLink: false },
      { type: '个人网站', value: 'zhangsan.com', isLink: true },
      { type: 'GitHub', value: 'github.com/zhangsan', isLink: true }
    ],
    experience: [
      {
        company: 'ABC科技有限公司',
        position: '前端开发工程师',
        period: '2023.01 - 至今',
        description: '负责公司官网和管理系统的前端开发，使用React + TypeScript技术栈。\n参与需求分析、系统设计、开发和测试，确保项目按时交付。\n优化前端性能，提升用户体验。'
      }
    ],
    education: [
      {
        school: '某某大学',
        major: '计算机科学与技术',
        degree: '本科',
        period: '2019.09 - 2023.06',
        description: 'GPA: 3.8/4.0，专业排名前5%。\n获得国家奖学金、校级优秀学生等荣誉。'
      }
    ],
    skills: 'React, JavaScript, TypeScript, HTML, CSS, Ant Design, Vue',
    backendSkills: 'Node.js, Express, MongoDB',
    projects: [
      {
        name: '企业管理系统',
        period: '2023.03 - 2023.06',
        description: '使用React + TypeScript + Ant Design开发的企业管理系统。\n负责前端页面开发和组件封装，实现了用户管理、权限控制、数据统计等功能。\n优化了系统性能，提升了用户体验。'
      }
    ]
  };
  
  return (
    <div className="app">
      {/* 导出按钮 */}
      <div className="export-button">
        <Button 
          type="primary" 
          icon={<DownloadOutlined />} 
          onClick={exportPDF}
          loading={loading}
        >
          导出PDF
        </Button>
      </div>
      
      <div className="resume-container">
        {/* 左边编辑区 */}
        <div className="resume-editor" ref={leftRef}>
          <Card title="简历编辑" variant="outlined">
            <Form form={form} layout="vertical" initialValues={defaultValues} onValuesChange={handleFormChange}>
              <Form.Item name="name" label="姓名">
                <Input />
              </Form.Item>
              
              <Form.Item name="title" label="职位">
                <Input />
              </Form.Item>
              
              <Form.Item name="photo" label="简历照片">
                <PhotoUpload 
                  value={form.getFieldValue('photo') || ''} 
                  onChange={handlePhotoChange} 
                />
              </Form.Item>
              
              <Form.Item label="联系方式">
                <Form.List name="contacts">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => {
                        // 解构field，移除key属性
                        const { key, ...restField } = field;
                        return (
                          <Card key={key} style={{ marginBottom: 0, borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0, boxShadow: 'none' }} bodyStyle={{ padding: '8px 0' }}>
                            <Space orientation="horizontal" style={{ width: '100%', alignItems: 'center' }}>
                              <Form.Item {...restField} name={[field.name, 'type']} label="类型" style={{ flex: 1, marginRight: 8, marginBottom: 0 }}>
                                <Input placeholder="如：邮箱、电话、个人网站等" />
                              </Form.Item>
                              <Form.Item {...restField} name={[field.name, 'value']} label="值" style={{ flex: 1, marginRight: 8, marginLeft: 8, marginBottom: 0 }}>
                                <Input />
                              </Form.Item>
                              <Form.Item {...restField} name={[field.name, 'isLink']} valuePropName="checked" label="是否为链接" style={{ marginRight: 8, marginLeft: 8, marginBottom: 0 }}>
                                <Switch size="small" />
                              </Form.Item>
                              <Button type="text" danger icon={<MinusOutlined />} onClick={() => remove(field.name)} style={{ marginLeft: 8 }}>
                                删除
                              </Button>
                            </Space>
                          </Card>
                        );
                      })}
                      <Button type="dashed" icon={<PlusOutlined />} onClick={() => add({ type: '', value: '', isLink: false })}>
                        添加联系方式
                      </Button>
                    </>
                  )}
                </Form.List>
              </Form.Item>
              
              <Divider />
              
              <Form.Item name="summary" label="个人简介">
                <TextArea rows={4} />
              </Form.Item>
              
              <Divider />
            
            <Form.Item label="工作经历">
                <Form.List name="experience">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => {
                        // 解构field，移除key属性
                        const { key, ...restField } = field;
                        return (
                          <Card key={key} title={`工作经历 ${index + 1}`} style={{ marginBottom: 16 }} variant="outlined">
                            <Space orientation="horizontal" style={{ width: '100%', marginBottom: 12 }}>
                              <Form.Item {...restField} name={[field.name, 'company']} label="公司名称" style={{ flex: 1, marginRight: 8 }}>
                                <Input />
                              </Form.Item>
                              <Form.Item {...restField} name={[field.name, 'position']} label="职位" style={{ flex: 1, marginLeft: 8 }}>
                                <Input />
                              </Form.Item>
                            </Space>
                            <Form.Item {...restField} name={[field.name, 'period']} label="工作时间">
                              <Input />
                            </Form.Item>
                            <Form.Item {...restField} name={[field.name, 'description']} label="工作描述">
                              <TextArea rows={3} />
                            </Form.Item>
                            <Button type="text" danger icon={<MinusOutlined />} onClick={() => remove(field.name)}>
                              删除
                            </Button>
                          </Card>
                        );
                      })}
                      <Button type="dashed" icon={<PlusOutlined />} onClick={() => add({ company: '', position: '', period: '', description: '' })}>
                        添加工作经历
                      </Button>
                    </>
                  )}
                </Form.List>
              </Form.Item>
              
              <Divider />
              
              <Form.Item label="教育背景">
                <Form.List name="education">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => {
                        // 解构field，移除key属性
                        const { key, ...restField } = field;
                        return (
                          <Card key={key} title={`教育背景 ${index + 1}`} style={{ marginBottom: 16 }} variant="outlined">
                            <Space orientation="horizontal" style={{ width: '100%', marginBottom: 12 }}>
                              <Form.Item {...restField} name={[field.name, 'school']} label="学校" style={{ flex: 1, marginRight: 8 }}>
                                <Input />
                              </Form.Item>
                              <Form.Item {...restField} name={[field.name, 'major']} label="专业" style={{ flex: 1, marginLeft: 8 }}>
                                <Input />
                              </Form.Item>
                            </Space>
                            <Space orientation="horizontal" style={{ width: '100%', marginBottom: 12 }}>
                              <Form.Item {...restField} name={[field.name, 'degree']} label="学历" style={{ flex: 1, marginRight: 8 }}>
                                <Input />
                              </Form.Item>
                              <Form.Item {...restField} name={[field.name, 'period']} label="时间" style={{ flex: 1, marginLeft: 8 }}>
                                <Input />
                              </Form.Item>
                            </Space>
                            <Form.Item {...restField} name={[field.name, 'description']} label="描述">
                              <TextArea rows={2} placeholder="请填写GPA、获奖情况等详细信息" />
                            </Form.Item>
                            <Button type="text" danger icon={<MinusOutlined />} onClick={() => remove(field.name)}>
                              删除
                            </Button>
                          </Card>
                        );
                      })} 
                      <Button type="dashed" icon={<PlusOutlined />} onClick={() => add({ school: '', major: '', degree: '', period: '', description: '' })}>
                        添加教育背景
                      </Button>
                    </>
                  )}
                </Form.List>
              </Form.Item>
              
              <Divider />
              
              <Form.Item name="skills" label="前端技能">
                <TextArea rows={3} placeholder="请用逗号分隔多个技能，如：React, JavaScript, TypeScript" />
              </Form.Item>
              
              <Form.Item name="backendSkills" label="后端技能">
                <TextArea rows={3} placeholder="请用逗号分隔多个技能，如：Node.js, Express, MongoDB" />
              </Form.Item>
              
              <Divider />
              
              <Form.Item label="项目经历">
                <Form.List name="projects">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => {
                        // 解构field，移除key属性
                        const { key, ...restField } = field;
                        return (
                          <Card key={key} title={`项目经历 ${index + 1}`} style={{ marginBottom: 16 }} variant="outlined">
                            <Space orientation="horizontal" style={{ width: '100%', marginBottom: 12 }}>
                              <Form.Item {...restField} name={[field.name, 'name']} label="项目名称" style={{ flex: 1, marginRight: 8 }}>
                                <Input />
                              </Form.Item>
                              <Form.Item {...restField} name={[field.name, 'period']} label="时间" style={{ flex: 1, marginLeft: 8 }}>
                                <Input />
                              </Form.Item>
                            </Space>
                            <Form.Item {...restField} name={[field.name, 'description']} label="项目描述">
                              <TextArea rows={4} placeholder="请描述项目的功能、技术栈和你的贡献" />
                            </Form.Item>
                            <Button type="text" danger icon={<MinusOutlined />} onClick={() => remove(field.name)}>
                              删除
                            </Button>
                          </Card>
                        );
                      })}
                      <Button type="dashed" icon={<PlusOutlined />} onClick={() => add({ name: '', period: '', description: '' })}>
                        添加项目经历
                      </Button>
                    </>
                  )}
                </Form.List>
              </Form.Item>
            </Form>
          </Card>
        </div>
        
        {/* 右边预览区 */}
        <div className="resume-preview" ref={rightRef}>
          <Card variant="outlined" id="resume-preview" style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
            <Header 
              name={previewData.name || '姓名'} 
              contacts={previewData.contacts || []} 
              photo={previewData.photo || ''} 
            />
            
            <Summary summary={previewData.summary || ''} />
            
            <Education education={previewData.education || []} />
            
            <Skills 
              skills={previewData.skills || ''} 
              backendSkills={previewData.backendSkills || ''} 
            />
            
            <Experience experience={previewData.experience || []} />
            
            <Projects projects={previewData.projects || []} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;