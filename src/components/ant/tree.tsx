import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Switch, Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import React, { FC, useState } from 'react';
// import 'antd/dist/antd.css'
import 'antd/lib/tree/style/index.css'
import { useRouter } from 'next/router';
import { Key } from 'antd/lib/table/interface';

interface Props {
  tree: DataNode[]
}
export const TreeAnt: FC<Props> = ({ tree }) => {
  const { push, asPath } = useRouter()

  
  const [showLine, setShowLine] = useState<boolean | { showLeafIcon: boolean }>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<boolean>(true);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    // console.log(info.node.key);
    push(info.node.key)
  };

  const onSetLeafIcon = (checked: boolean) => {
    setShowLeafIcon(checked);
    setShowLine({ showLeafIcon: checked });
  };

  const onSetShowLine = (checked: boolean) => {
    setShowLine(checked ? { showLeafIcon } : false);
  };

  return (
    <div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={[asPath]}
        onSelect={onSelect}
        treeData={tree}
      />
    </div>
  );
};