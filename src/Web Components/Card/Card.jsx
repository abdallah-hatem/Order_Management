import React from "react";

function Card({ title, count, icon, color }) {
  return (
    <div class="col-lg-3 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-1">
              <i style={{ color: color }} class={icon}></i>
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text">
                  $<span class="count">{count}</span>
                </div>
                <div class="stat-heading">{title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
