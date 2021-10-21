import React from 'react';
import './Doctors.css';
import cardilogy from '../../image/Doctors/at (1).jpg';
import emergency from '../../image/Doctors/at (2).jpg';
import surgery from '../../image/Doctors/at (3).jpg';
import diabetics from '../../image/Doctors/at (4).jpg';
import nephrology from '../../image/Doctors/at (5).jpg';
import pharmacy from '../../image/Doctors/at (6).jpg';



const Doctors = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-info m-5">Our Doctors</h1>
            </div>
            <div className="doctors-container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={cardilogy} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">DR. MOMENUZZAMAN</h5>
                                <p class="card-text">
                                    MBBS, D-Card. MD (Card)
                                    Chief Consultant</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={emergency} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> DR. ZAHID HOSSAIN
                                </h5>
                                <p class="card-text">
                                    MBBS (Dhaka)
                                    MPH (Epidemiology)
                                    MS (Pediatric Surgery)
                                    Consultant, Pediatric Surgery & Emergency Department.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={surgery} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">PROF. DR. TAPAN SAHA</h5>
                                <p class="card-text">MBBS, FCPS (SURGERY), FELLOW (MIS).
                                    General & Laparoscopic Surgery Specialist.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={diabetics} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">PROF. DR. PRASAD</h5>
                                <p class="card-text">MBBS (DMC), FCPS (MEDICINE), MD (ENDOCRINOLOGY-BIRDEM), MACE (USA)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={nephrology} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">PROF. BRIG MOSTAFI (RTD.)
                                </h5>
                                <p class="card-text">MBBS, MACP (USA), MRACP(AUSTRALIA), FCPS (MED), FRCP (I)
                                    Specialist in Nephrology and Joint Disease</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={pharmacy} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">DR. ANIS</h5>
                                <p class="card-text">
                                    MBBS (DMC), MRCP (UK)
                                    Senior Consultant.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;