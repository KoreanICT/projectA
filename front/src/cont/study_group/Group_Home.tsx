import React, { useState } from 'react';
import { Group_Sidebar } from './Group_Sidebar';
import './group.model.css';

export const Group_Home: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<'public' | 'my'>('public');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    // 검색 조건 상태
    const [searchType, setSearchType] = useState<'name' | 'tag'>('name');
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <div className="container">
            <div className="study-page-layout">
                {/* 1. 메인 콘텐츠 영역 (좌측) */}
                <main className="study-main-content">
                    <div className="study-list-wrapper">
                        <div className="study-card">
                            조회된 {currentTab === 'public' ? '공개' : '내'} 스터디 그룹 카드 1
                        </div>
                        <div className="study-card">
                            조회된 {currentTab === 'public' ? '공개' : '내'} 스터디 그룹 카드 2
                        </div>
                        <div className="study-card">
                            조회된 {currentTab === 'public' ? '공개' : '내'} 스터디 그룹 카드 3
                        </div>
                    </div>
                </main>

                {/* 2. 우측 사이드바 영역 */}
                <Group_Sidebar
                    currentTab={currentTab}
                    onTabChange={(tab) => setCurrentTab(tab)}
                    onOpenCreateModal={() => setIsModalOpen(true)}
                    searchType={searchType}
                    onSearchTypeChange={(type) => setSearchType(type)}
                    searchTerm={searchTerm}
                    onSearchChange={(value) => setSearchTerm(value)}
                />

                {/* 3. 스터디룸 생성 모달 */}
                {isModalOpen && (
                    <div className="study-modal-overlay" onClick={() => setIsModalOpen(false)}>
                        <div className="study-modal-box" onClick={(e) => e.stopPropagation()}>
                            <h2>스터디룸 생성</h2>
                            <p>스터디 이름 및 정원(5명, 10명 등) 설정 폼 영역입니다.</p>
                            <button
                                className="study-modal-close-btn"
                                onClick={() => setIsModalOpen(false)}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};