import React, { useState } from 'react';
import { Input } from 'antd';

export const SearchBar = ({ queryName }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Input
            placeholder={`Search ${queryName ? queryName : 'Article'}...`}
            prefix={<span>🔍</span>}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            style={{ width: 286, height: 35, fontSize: 20 }}
        />
    );
};
