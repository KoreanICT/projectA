import React from 'react';

interface StudySidebarProps {
    currentTab: 'public' | 'my';
    onTabChange: (tab: 'public' | 'my') => void;
    onOpenCreateModal: () => void;
}

export const Group_Sidebar: React.FC<StudySidebarProps> = ({
    currentTab,
    onTabChange,
    onOpenCreateModal,
}) => {
    return (
        <aside className="study-sidebar-container">
            <nav className="study-menu-box">
                <button
                    className={`study-menu-button ${currentTab === 'my' ? 'active' : ''}`}
                    onClick={() => onTabChange('my')}
                >
                    내 스터디룸
                </button>

                <div className="study-menu-divider" />

                <button
                    className={`study-menu-button ${currentTab === 'public' ? 'active' : ''}`}
                    onClick={() => onTabChange('public')}
                >
                    공개된 스터디룸
                </button>

                <div className="study-menu-divider" />

                <button
                    className="study-menu-button"
                    onClick={onOpenCreateModal}
                >
                    스터디룸 생성
                </button>
            </nav>
        </aside>
    );
};