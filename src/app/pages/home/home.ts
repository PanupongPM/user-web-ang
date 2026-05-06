import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  constructor(public auth: AuthService) {}

  features = [
    {
      icon: '🚀',
      title: 'ประสิทธิภาพสูง',
      description: 'ระบบประมวลผลรวดเร็วด้วยเทคโนโลยีล่าสุด',
    },
    {
      icon: '🔒',
      title: 'ปลอดภัย',
      description: 'ข้อมูลของคุณได้รับการปกป้องอย่างเข้มงวด',
    },
    {
      icon: '🎨',
      title: 'ออกแบบทันสมัย',
      description: 'ดีไซน์สวยงามและใช้งานง่ายสะดวก',
    },
    {
      icon: '📱',
      title: 'รองรับทุกอุปกรณ์',
      description: 'แสดงผลได้อย่างสมบูรณ์แบบทุกหน้าจอ',
    },
    {
      icon: '⚡',
      title: 'อัพเดตตลอด',
      description: 'ฟีเจอร์ใหม่และการปรับปรุงอยู่เสมอ',
    },
    {
      icon: '💬',
      title: 'ซัพพอร์ต 24/7',
      description: 'ทีมงานพร้อมช่วยเหลือคุณตลอดเวลา',
    },
  ];

  stats = [
    { value: '10K+', label: 'ผู้ใช้งาน' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50+', label: 'ฟีเจอร์' },
    { value: '24/7', label: 'ซัพพอร์ต' },
  ];
}
