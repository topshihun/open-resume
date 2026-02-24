import React from 'react';
import { Form, Input, Button, Space, Card } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface SkillFieldsProps {
  name: string;
}

const SkillFields: React.FC<SkillFieldsProps> = ({ name }) => {
  return (
    <Form.Item label="技能">
      <Form.List name={name}>
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => {
              const { key, ...restField } = field;
              return (
                <Card 
                  key={key} 
                  style={{ 
                    marginBottom: 0, 
                    borderBottom: 'none', 
                    borderLeft: 'none', 
                    borderRight: 'none', 
                    borderRadius: 0, 
                    boxShadow: 'none' 
                  }} 
                  styles={{ body: { padding: '8px 0' } }}
                >
                  <Space orientation="horizontal" style={{ width: '100%', alignItems: 'center' }}>
                    <Form.Item 
                      {...restField} 
                      name={[field.name, 'category']} 
                      label="技能类别" 
                      style={{ flex: 1, marginRight: 8, marginBottom: 0 }}
                    >
                      <Input placeholder="如：前端技能、后端技能、设计技能等" />
                    </Form.Item>
                    <Form.Item 
                      {...restField} 
                      name={[field.name, 'description']} 
                      label="技能描述" 
                      style={{ flex: 2, marginRight: 8, marginLeft: 8, marginBottom: 0 }}
                    >
                      <Input placeholder="如：React, JavaScript, TypeScript, HTML, CSS" />
                    </Form.Item>
                    <Button 
                      type="text" 
                      danger 
                      icon={<MinusOutlined />} 
                      onClick={() => remove(field.name)} 
                      style={{ marginLeft: 8 }}
                    >
                      删除
                    </Button>
                  </Space>
                </Card>
              );
            })}
            <Button 
              type="dashed" 
              icon={<PlusOutlined />} 
              onClick={() => add({ category: '', description: '' })}
            >
              添加技能类别
            </Button>
          </>
        )}
      </Form.List>
    </Form.Item>
  );
};

export default SkillFields;