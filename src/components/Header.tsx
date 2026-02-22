import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

interface Contact {
  type: string;
  value: string;
  isLink: boolean;
}

interface HeaderProps {
  name: string;
  contacts: Contact[];
  photo: string;
}

const Header: React.FC<HeaderProps> = ({ name, contacts, photo }) => {
  return (
    <div className="preview-header" style={{ marginBottom: 30, textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, position: 'relative' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <Title level={2} style={{ color: '#000000', marginBottom: 12, fontSize: '24px', fontWeight: '700' }}>
            {name || '姓名'}
          </Title>
          <div className="contact-info" style={{ 
            fontSize: '12px', 
            color: '#666666', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: '8px 16px'
          }}>
            {contacts.map((contact, index) => {
              if (!contact.value) return null;
              
              const displayValue = `${contact.type}: ${contact.value}`;
              
              return (
                <Text 
                  key={index} 
                  style={{
                    textDecoration: contact.isLink ? 'underline' : 'none',
                    cursor: contact.isLink ? 'pointer' : 'default',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {contact.isLink ? (
                    <a href={contact.type === '邮箱' ? `mailto:${contact.value}` : contact.value} style={{ color: '#666666' }}>
                      {displayValue}
                    </a>
                  ) : (
                    displayValue
                  )}
                </Text>
              );
            })}
          </div>
        </div>
        {photo && (
          <img 
            src={photo} 
            alt="简历照片" 
            style={{ 
              width: '80px', 
              height: '100px', 
              objectFit: 'cover', 
              borderRadius: '4px',
              position: 'absolute',
              right: 0
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;