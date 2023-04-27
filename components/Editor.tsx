import {
  Connection,
  ConnectionLineType,
  EdgeChange,
  MarkerType,
  NodeChange,
  useReactFlow,
} from '@reactflow/core'
import React, { useCallback, useState } from 'react'
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { Bar } from './Bar'
import shallow from 'zustand/shallow'

import { Nodes, NodesState } from './Nodes'

const selector = (state: NodesState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  addNode: state.addNode,
})

export function Editor() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
    Nodes.use(selector, shallow)

  return (
    <div className='grid grid-cols-[50px_1fr]  h-[calc(100vh-56px)] bg-slate-400  p-2 gap-2'>
      <Bar
        onCreateNode={(newNode) => {
          addNode({
            ...newNode,
            data: {
              ...newNode.data,
              locked: false,
              running: false,
              repeating: false,
            },
            id: Math.random().toString(),
          })
        }}
      />
      <div className='w-full relative'>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          proOptions={{
            hideAttribution: true,
          }}
          nodeTypes={Nodes.nodeTypes}
          className='bg-gray-700 rounded-lg'
          defaultEdgeOptions={{
            type: 'smoothstep',
            style: {
              stroke: '#3b3b3b',
              strokeWidth: 2,
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: '#3b3b3b',
            },
          }}
          nodeOrigin={[0.5, 0.5]}
          connectionLineStyle={{
            stroke: '#3b3b3b',
            strokeWidth: 2,
          }}
          connectionLineType={ConnectionLineType.SmoothStep}
        >
          <Background className='rounded-md' />
          <MiniMap position='bottom-left' zoomable pannable />
          <Controls position='bottom-right' />
        </ReactFlow>
      </div>
    </div>
  )
}

export namespace Editor {}
