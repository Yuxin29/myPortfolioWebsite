import React from "react";
import './Gallery.css'

const samplePhotos = [
    "https://picsum.photos/id/1011/800/600",
    "https://picsum.photos/id/1022/800/600",
    "https://picsum.photos/id/1068/800/600",
    "https://picsum.photos/id/1015/800/600",
    "https://picsum.photos/id/1018/800/600",
    "https://picsum.photos/id/1020/800/600",
    "https://picsum.photos/id/1024/800/600",
    "https://picsum.photos/id/1025/800/600"
]

function Gallery() {
    return (
        <section id="gallery" className="gallery-section">
        <h2 className="gallery-title">Photography Gallery</h2>
        <div className="gallery-grid">
            {samplePhotos.map((url, i) => (
            <figure key={i} className="photo-card">
                <img src={url} alt={`photo-${i}`} loading="lazy" />
                <figcaption>Photo {i + 1}</figcaption>
            </figure>
            ))}
        </div>
        </section>
    );
}

export default Gallery