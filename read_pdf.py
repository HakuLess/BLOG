#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF内容读取脚本
用于读取Android求职简历PDF文件的文本内容
"""

import PyPDF2
import sys
import os

def read_pdf_content(pdf_path):
    """读取PDF文件内容"""
    try:
        # 检查文件是否存在
        if not os.path.exists(pdf_path):
            print(f"错误：文件 {pdf_path} 不存在")
            return None
        
        # 打开PDF文件
        with open(pdf_path, 'rb') as file:
            # 创建PDF读取器
            pdf_reader = PyPDF2.PdfReader(file)
            
            # 获取页数
            num_pages = len(pdf_reader.pages)
            print(f"PDF文件共有 {num_pages} 页")
            print("=" * 50)
            
            # 读取所有页面的文本内容
            full_text = ""
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                page_text = page.extract_text()
                full_text += f"\n=== 第 {page_num + 1} 页 ===\n"
                full_text += page_text
                full_text += "\n"
            
            return full_text
            
    except Exception as e:
        print(f"读取PDF时发生错误: {str(e)}")
        return None

def main():
    # PDF文件路径
    pdf_file = "Android求职简历—马双飞.pdf"
    
    print(f"正在读取PDF文件: {pdf_file}")
    
    # 读取PDF内容
    content = read_pdf_content(pdf_file)
    
    if content:
        print("PDF内容读取成功！")
        print("=" * 50)
        print(content)
        
        # 可选：将内容保存到文本文件
        output_file = "简历内容.txt"
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"\n内容已保存到: {output_file}")
        except Exception as e:
            print(f"保存文件时出错: {str(e)}")
    else:
        print("PDF内容读取失败！")

if __name__ == "__main__":
    main()