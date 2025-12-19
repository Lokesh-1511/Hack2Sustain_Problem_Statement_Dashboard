import React from 'react';
import { Card, Badge, Carousel } from 'react-bootstrap';
import { problems } from '../data/problems';
import './ProblemCarousel.css';

// Full-page, single-card carousel with slide animation and infinite looping
const ProblemCarousel = () => {
  return (
    <div className="carousel-page">
      <div className="page-header">
        <div className="section-header">
          <div className="header-sponsors">
            {/* Sponsor filename mapping for public/logos */}
            <div className="sponsor-list left">
              {[
                { key: 'StartupTN', file: 'startup_tn.png', name: 'StartupTN' },
                { key: 'Ragworks', file: 'ragworks.jpg', name: 'Ragworks' },
                { key: 'QbytX', file: 'QbytX.jpg', name: 'QbytX' },
              ].map((s) => (
                <div key={s.key} className={`sponsor-item sponsor-${s.key}`} title={s.name}>
                  <div className="sponsor-logo-wrap">
                    <img src={`/logos/${encodeURIComponent(s.file)}`} alt={s.name} className="sponsor-logo" />
                  </div>
                  <span className="sponsor-name">{s.name}</span>
                </div>
              ))}
            </div>
            <div className="hackathon-brand">
              <h1 className="hackathon-title">Hack2TechSustain 2.0</h1>
              <div className="hackathon-subtitle">Sustainovate</div>
              <p className="hackathon-tagline">Leveraging AI's Voice, Vision, and Values for a Better World</p>
            </div>
            <div className="sponsor-list right">
              {[
                { key: 'OSpectra', file: 'Ospectra.jpg', name: 'OSpectra' },
                { key: 'ABT-Maruthi', file: 'ABT Maruthi.jpg', name: 'ABT Maruthi' },
                { key: 'GG-India-Insurance', file: 'GGinsurance.jpeg', name: 'GG India Insurance' },
              ].map((s) => (
                <div key={s.key} className={`sponsor-item sponsor-${s.key}`} title={s.name}>
                  <div className="sponsor-logo-wrap">
                    <img src={`/logos/${encodeURIComponent(s.file)}`} alt={s.name} className="sponsor-logo" />
                  </div>
                  <span className="sponsor-name">{s.name}</span>
                </div>
              ))}
            </div>
            {null}
          </div>
          <div className="title-center">
            <h2 className="section-title">Problem Statements</h2>
            <div className="section-underline" />
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="qr-aside left">
          <img src="/QR/FormQR.png" alt="Form QR - select problem" className="qr-image" />
          <div className="qr-caption">Scan to open selection form</div>
        </div>
        <div className="carousel-frame">
          <Carousel interval={5000} ride="carousel" controls indicators fade={false} pause={false} touch wrap>
            {problems.map((p, idx) => (
              <Carousel.Item key={idx}>
                <Card className="carousel-card">
                  <Card.Body className="content-only d-flex flex-column h-100">
                    <Card.Title className="mb-2 display-title">{p.title}</Card.Title>
                    <div className="sdg-badges mb-2">
                      {p.sdgs && p.sdgs.map((s, i) => (
                        <Badge key={i} bg="warning" text="dark" className="me-2 sdg-badge">{s}</Badge>
                      ))}
                    </div>
                    <div className="mb-2">
                      {p.domain && p.domain.map((d, i) => (
                        <Badge bg="secondary" key={i} className="me-2 domain-badge">{d}</Badge>
                      ))}
                    </div>
                    <Card.Text className="lead-statement">{p.problemStatement}</Card.Text>
                    <Card.Text className="description-text">{p.problemDescription}</Card.Text>
                    {p.sampleTools && (
                      <div className="tools-list mt-3">
                        <strong>Sample Tools / Technologies:</strong>
                        <div className="mt-1">
                          {p.sampleTools.map((t, i) => (
                            <span key={i} className="tool-chip me-2">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="card-footer-actions" />
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="qr-aside right">
          <img src="/QR/PDFQR.png" alt="PDF QR - download problem statement" className="qr-image" />
          <div className="qr-caption">Scan to download PDF</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCarousel;
