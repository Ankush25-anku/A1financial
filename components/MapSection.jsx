"use client";

export default function MapSection() {
  return (
    <section className="padding-bottom">
      <div className="container">
        <div className="map-card">
          <div className="map-card__header">
            <h4>Our Location</h4>

            <a
              href="https://www.google.com/maps/dir/13.0135909,77.7616675/Share+Space+-+Coworking+Space+in+Whitefield,+88,+Borewell+Rd,+Palm+Meadows,+Dodsworth+Layout,+Whitefield,+Bengaluru,+Karnataka+560066/"
              target="_blank"
              rel="noopener noreferrer"
              className="trk-btn trk-btn--primary"
            >
              Open in Maps
            </a>
          </div>

          <div className="map-responsive">
            <a
              href="https://www.google.com/maps/dir/13.0135909,77.7616675/Share+Space+-+Coworking+Space+in+Whitefield,+88,+Borewell+Rd,+Palm+Meadows,+Dodsworth+Layout,+Whitefield,+Bengaluru,+Karnataka+560066/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open A1 Financial location in Google Maps"
            >
              <iframe
                title="A1 Financial Location"
                src="https://www.google.com/maps?q=88%20Borewell%20Rd%20Palm%20Meadows%20Dodsworth%20Layout%20Whitefield%20Bengaluru%20560066&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
