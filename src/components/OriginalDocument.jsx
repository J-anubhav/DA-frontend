import { FileImage, Bot } from 'lucide-react';
import './OriginalDocument.css';

export default function OriginalDocument({ scribe, originalImage, processedImage }) {
    const imageUrl = processedImage?.url || originalImage?.url || scribe?.imageUrl || '';

    return (
        <div className="card original-doc-card">
            <h3 className="section-heading">
                <FileImage size={20} />
                Original Document
            </h3>

            {imageUrl ? (
                <div className="doc-image-wrapper">
                    <img
                        src={imageUrl}
                        alt="Prescription document"
                        className="doc-image"
                        loading="lazy"
                    />
                </div>
            ) : (
                <div className="doc-placeholder">
                    <FileImage size={48} strokeWidth={1} />
                    <span>No image available</span>
                </div>
            )}

            {scribe?.scribeId && (
                <div className="scribe-info">
                    <span className="badge badge-green">
                        <Bot size={12} />
                        {scribe.scribeId} processed
                    </span>
                    {scribe.publicId && (
                        <span className="doc-ref">
                            img_ref: {scribe.publicId.split('/').pop()}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
