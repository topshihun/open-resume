import React from 'react';
import { Card, Form, Space, Button, Input, TextArea } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface FormListSectionProps {
  title: string;
  name: string;
  form: any;
  children?: React.ReactNode;
  renderItem: (field: any, index: number, remove: (name: any) => void) => React.ReactNode;
}

const FormListSection: React.FC<FormListSectionProps> = ({ 
  title, 
  name, 
  form, 
  children, 
  renderItem 
}) => {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <>
          {children}
          {fields.map((field, index) => (
            <div key={field.key}>
              {renderItem(field, index, remove)}
            </div>
          ))}
          <Button type="dashed" icon={<PlusOutlined />} onClick={() => add()}>
            添加{title}
          </Button>
        </>
      )}
    </Form.List>
  );
};

export default FormListSection;