import React, { useState } from 'react'
import './Tools.css'

function Tools() {
  const [jsonInput, setJsonInput] = useState('')
  const [jsonOutput, setJsonOutput] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('format')

  // JSON 格式化
  const formatJSON = () => {
    try {
      setError('')
      const parsed = JSON.parse(jsonInput)
      setJsonOutput(JSON.stringify(parsed, null, 2))
    } catch (err) {
      setError('无效的 JSON 格式: ' + err.message)
    }
  }

  // JSON 压缩
  const minifyJSON = () => {
    try {
      setError('')
      const parsed = JSON.parse(jsonInput)
      setJsonOutput(JSON.stringify(parsed))
    } catch (err) {
      setError('无效的 JSON 格式: ' + err.message)
    }
  }

  // 清空
  const clear = () => {
    setJsonInput('')
    setJsonOutput('')
    setError('')
  }

  // 复制到剪贴板
  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput).then(() => {
      alert('已复制到剪贴板')
    })
  }

  return (
    <div className="tools-container">
      <div className="tools-header">
        <h2>实用工具</h2>
        <p>在这里你可以使用我提供的小工具</p>
      </div>

      <div className="tools-content">
        <div className="tool-card">
          <h3>JSON 工具</h3>
          <div className="tool-tabs">
            <button
              className={`tab ${activeTab === 'format' ? 'active' : ''}`}
              onClick={() => setActiveTab('format')}
            >
              格式化
            </button>
            <button
              className={`tab ${activeTab === 'minify' ? 'active' : ''}`}
              onClick={() => setActiveTab('minify')}
            >
              压缩
            </button>
          </div>

          <div className="tool-body">
            <div className="input-group">
              <label>输入 JSON</label>
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="粘贴你的 JSON 代码"
              ></textarea>
            </div>

            <div className="button-group">
              {activeTab === 'format' && (
                <button className="btn btn-primary" onClick={formatJSON}>
                  格式化
                </button>
              )}
              {activeTab === 'minify' && (
                <button className="btn btn-primary" onClick={minifyJSON}>
                  压缩
                </button>
              )}
              <button className="btn btn-secondary" onClick={clear}>
                清空
              </button>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="output-group">
              <div className="output-header">
                <label>输出结果</label>
                {jsonOutput && (
                  <button className="copy-btn" onClick={copyToClipboard}>
                    复制
                  </button>
                )}
              </div>
              <textarea
                value={jsonOutput}
                readOnly
                placeholder="输出结果会显示在这里"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="tools-grid">
          <div className="tool-card small">
            <h4>颜色转换器</h4>
            <p>即将推出：HEX、RGB、HSL 颜色转换工具</p>
          </div>

          <div className="tool-card small">
            <h4>单位转换器</h4>
            <p>即将推出：长度、重量、温度等单位转换</p>
          </div>

          <div className="tool-card small">
            <h4>文本处理</h4>
            <p>即将推出：字符统计、字符串处理工具</p>
          </div>

          <div className="tool-card small">
            <h4>二维码生成</h4>
            <p>即将推出：快速生成二维码</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
