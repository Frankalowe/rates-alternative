import { useState } from 'react';
import './Transaction.css';

interface TransactionProps {
    onBack: () => void;
    market: string;
    type: 'buy' | 'sell';
    amount: string;
    rate: string;
    color: string;
    abbrev: string;
}

export default function Transaction({ onBack, market, type, amount, rate, color, abbrev }: TransactionProps) {
    const [showUploadModal, setShowUploadModal] = useState(false);

    const lkrAmount = type === 'buy'
        ? (parseFloat(amount) * parseFloat(rate)).toLocaleString('en-US')
        : amount; // Simplify for now

    return (
        <div className="transaction-page">
            <div className="container tx-container">

                {/* Left Column: Main Details */}
                <div className="tx-main">
                    <div className="card market-details-card">
                        <div className="card-header">
                            <h2>Market Details</h2>
                        </div>
                        <div className="card-body">
                            <div className="tx-market-info">
                                <div className="market-logo" style={{ backgroundColor: color, width: 40, height: 40, fontSize: '1.2rem', marginRight: '1rem' }}>
                                    {abbrev}
                                </div>
                                <div>
                                    <h3 style={{ margin: 0 }}>{market} <span className="badge">crypto</span></h3>
                                    <small className="text-muted">Rate at time: LKR {rate}</small>
                                </div>
                            </div>
                            <div className="tx-meta-grid">
                                <div>
                                    <small className="text-muted">Created:</small>
                                    <p>Mar 12, 2026, 08:07 AM</p>
                                </div>
                                <div>
                                    <small className="text-muted">Updated:</small>
                                    <p>Mar 12, 2026, 08:07 AM</p>
                                </div>
                                <div>
                                    <small className="text-muted">Mode:</small>
                                    <p>Standard</p>
                                </div>
                                <div>
                                    <small className="text-muted">Status:</small>
                                    <p>Ongoing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card tx-progress-card">
                        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#f5a623' }}>●</span> Transaction Progress</h2>
                            <span className="badge">Step 2 of 5</span>
                        </div>
                        <div className="card-body">
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: '40%', backgroundColor: '#f5a623' }}></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <small className="text-muted">Started</small>
                                <small className="text-muted">40% Complete</small>
                            </div>

                            <div className="stepper">
                                <div className="step completed">
                                    <div className="step-icon">✓</div>
                                    <div className="step-content">
                                        <h4>Transaction Initiated</h4>
                                        <p>Your {type} order has been created</p>
                                    </div>
                                </div>
                                <div className="step current">
                                    <div className="step-icon">⏱</div>
                                    <div className="step-content">
                                        <h4>Waiting for Payment</h4>
                                        <p>Transfer funds to our LKR account</p>
                                    </div>
                                    <span className="badge">Current</span>
                                </div>
                                <div className="step pending">
                                    <div className="step-icon">3</div>
                                    <div className="step-content">
                                        <h4>Payment Verification</h4>
                                        <p>We are verifying your payment</p>
                                    </div>
                                </div>
                                <div className="step pending">
                                    <div className="step-icon">4</div>
                                    <div className="step-content">
                                        <h4>Processing Transfer</h4>
                                        <p>Transferring your purchased currency</p>
                                    </div>
                                </div>
                                <div className="step pending">
                                    <div className="step-icon">5</div>
                                    <div className="step-content">
                                        <h4>Completed</h4>
                                        <p>Transaction completed successfully</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar & Actions */}
                <div className="tx-sidebar">

                    <div className="card bank-instructions-card">
                        <div className="card-body">
                            <h4 style={{ marginBottom: '0.5rem' }}>Bank Instructions</h4>
                            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Please transfer the exact amount to the following account.</p>

                            <div className="bank-details">
                                <div className="bank-row">
                                    <span className="text-muted">Bank:</span>
                                    <strong>Seylan Bank - Akuressa</strong>
                                </div>
                                <div className="bank-row">
                                    <span className="text-muted">Account Name:</span>
                                    <strong>SM Gunarathna 📋</strong>
                                </div>
                                <div className="bank-row">
                                    <span className="text-muted">Account Number:</span>
                                    <div className="copy-box">
                                        <span>016013236925120</span>
                                        <button className="btn-copy">📋</button>
                                    </div>
                                </div>
                                <div className="bank-row">
                                    <span className="text-muted">Branch:</span>
                                    <strong>Akuressa</strong>
                                </div>
                            </div>

                            <button className="btn btn-block btn-upload" onClick={() => setShowUploadModal(true)}>
                                ↑ Upload Payment Proof →
                            </button>
                            <button className="btn btn-block btn-cancel-tx" onClick={onBack}>
                                ⊗ Cancel Transaction
                            </button>
                        </div>
                    </div>

                    <div className="card activity-card">
                        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>∿ Activity</h2>
                            <span className="badge">1 Events</span>
                        </div>
                        <div className="card-body">
                            <div className="activity-item">
                                <div className="activity-icon">⏱</div>
                                <div className="activity-content">
                                    <div className="activity-header">
                                        <h4>Transaction Created</h4>
                                        <small className="text-muted">Mar 12, 08:07 AM</small>
                                    </div>
                                    <p>Transaction has been initiated and created in the system</p>
                                    <small className="text-muted">👤 User • Just now</small>
                                </div>
                            </div>
                            <div className="activity-footer">
                                <small className="text-muted">Last updated: Just now</small>
                                <span style={{ color: '#26A17B', fontSize: '0.8rem' }}>● Live</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {showUploadModal && (
                <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
                    <div className="modal-container upload-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Upload Payment Proof</h3>
                            <button className="modal-close" onClick={() => setShowUploadModal(false)}>✕</button>
                        </div>
                        <div className="modal-body">
                            <div className="upload-summary">
                                <div className="summary-col">
                                    <span className="text-muted">You Pay</span>
                                    <strong style={{ color: 'var(--color-danger)' }}>LKR {lkrAmount}</strong>
                                </div>
                                <div className="summary-col">
                                    <span className="text-muted">You Receive</span>
                                    <strong style={{ color: 'var(--color-success)' }}>{amount} {market === 'Tether +' ? 'USDT' : market}</strong>
                                </div>
                            </div>

                            <div className="upload-section">
                                <h4>Send LKR to Our Account</h4>
                                <div className="bank-details-lite">
                                    <p>Seylan Bank - Akuressa</p>
                                    <p>016013236925120</p>
                                    <p>SM Gunarathna</p>
                                </div>
                            </div>

                            <div className="upload-section">
                                <h4>Where You Receive {market}</h4>
                                <button className="btn btn-outline btn-block">+ Add Recipient Address</button>
                            </div>

                            <div className="upload-section">
                                <h4>Upload Payment Screenshot</h4>
                                <div className="dropzone">
                                    <p>Drag & drop or click to upload</p>
                                    <small className="text-muted">PNG, JPG up to 5MB</small>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-cancel" onClick={() => setShowUploadModal(false)}>Cancel</button>
                            <button className="btn btn-confirm btn-upload disabled" disabled>Submit Payment Proof</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
