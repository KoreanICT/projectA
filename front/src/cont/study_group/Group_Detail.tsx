import React, { useState } from 'react';
import { Detail_Sidebar, DetailTab } from './Detail_Sidebar';
import { Detail_Overview } from './Detail_Overview';
import { Detail_Video } from './Detail_Video';
import styles from './detail.module.css';

interface GroupDetailProps {
    onBackToHome?: () => void; // Group_Home으로 돌아가는 콜백 함수
}

export const Group_Detail: React.FC<GroupDetailProps> = ({ onBackToHome }) => {
    const [currentTab, setCurrentTab] = useState<DetailTab>('overview');

    return (
        <div className="container">
            {/* 1. 상단 뒤로가기 버튼 영역 */}
            <div className={styles.top_navigation}>
                <button className={styles.back_button} onClick={onBackToHome}>
                    ← 스터디 목록으로 돌아가기
                </button>
            </div>

            {/* 2. 메인 디테일 레이아웃 */}
            <div className={styles.detail_page_layout}>
                {/* 좌측 콘텐츠 영역 (선택된 탭에 맞춰 자식 컴포넌트 렌더링) */}
                <main className={styles.detail_main_content}>
                    {currentTab === 'overview' && <Detail_Overview />}
                    {currentTab === 'video' && <Detail_Video />}
                </main>

                {/* 우측 전용 사이드바 */}
                <Detail_Sidebar
                    currentTab={currentTab}
                    onTabChange={(tab) => setCurrentTab(tab)}
                />
            </div>
        </div>
    );
};