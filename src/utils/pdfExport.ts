import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * 导出简历为PDF
 */
export const exportResumeToPDF = async (): Promise<void> => {
  try {
    const content = document.getElementById('a4-preview-content');
    
    if (!content) {
      throw new Error('预览内容未找到');
    }

    // 创建临时的A4容器用于PDF导出
    const tempContainer = document.createElement('div');
    tempContainer.style.width = '210mm';
    tempContainer.style.minHeight = '297mm';
    tempContainer.style.padding = '15mm';
    tempContainer.style.boxSizing = 'border-box';
    tempContainer.style.background = 'white';
    tempContainer.style.fontFamily = 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif';
    tempContainer.style.fontSize = '14px';
    tempContainer.style.lineHeight = '1.5';
    
    // 复制内容到临时容器
    tempContainer.innerHTML = content.innerHTML;
    
    // 添加到DOM进行渲染
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    document.body.appendChild(tempContainer);

    const canvas = await html2canvas(tempContainer, {
      scale: 2,
      useCORS: true,
      logging: false,
      width: 794, // 210mm in pixels
      height: 1123, // 297mm in pixels
      windowWidth: 794,
      windowHeight: 1123,
    });
    
    // 清理临时容器
    document.body.removeChild(tempContainer);
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    
    // 直接使用A4尺寸
    const imgWidth = 210;
    const imgHeight = 297;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('resume.pdf');
  } catch (error) {
    console.error('导出PDF失败:', error);
    throw error;
  }
};