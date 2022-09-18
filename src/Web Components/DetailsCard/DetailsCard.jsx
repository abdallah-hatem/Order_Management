import React from "react";

function DetailsCard({ data }) {
  return (
    <div class="col-md-7 float-right">
      <div class="card mb-3">
        <div class="card-body">
          {data.map((el) => (
            <>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">{el.title}</h6>
                </div>
                <div class="col-sm-9 text-secondary">{el.name}</div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
