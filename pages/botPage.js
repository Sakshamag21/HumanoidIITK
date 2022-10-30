import MenuBar from "../components/menuBar";
import style from "./botPage.module.css"

function BotPage(){
    return(<>
    <MenuBar></MenuBar>
    <div className={style.titleBot}>AUTOMI</div>
    <div className={style.botCover}>
    <div className={style.botInfo}>
      <div className={style.titleH}>Introduction</div>
      <p>It is beyond question that a man’s best assistant is another man himself. If ever in near future, there arises a
           possibility of a machine replacing a man’s role, the chosen
           machine has to be made to look as close as to a human
            in appearance and has to be capable of adapting to human
           environment without much modification. With this vision,
           many companies, research institutes and universities have
           been developing various humanoids. The most famous and impressive humanoid robot is
          ASIMO made by HONDA. After the prototype robot
          P2  was revealed in 1996, HONDA has steadily released
        the progress of ASIMO. Other than ASIMO, we followed
        the research work of famous kid size robot, NAO . Their
        research work guided us and provided us the basic framework
        for our study.Many research papers were studied to build the actuating
        system of the humanoid. Initially, the design of actuator
        assembly was built and tested on VRep (Simulation software)
        to find the appropriate orientation of each actuator (Smart
        Servos) and to minimize the internal vibrations occurs due
        to misalignment of actuators and links. After finalizing the orientation, torques on each joints were calculated using
MSC ADAMS (Simulation software). After this, Stick model
MATLAB simulation was done to find out the optimized
walking algorithm, corrected torque (taking dynamic torque
into account) and the dimensions of different links. With
all this research data, CAD model was constructed with
simple links to avoid any manufacturing errors. After this,
a biped was fabricated according to finalized design. This
design was as close to human legs as possible. To fabricate
error free biped, some parts were manufactured several
times. Similarly, the torso (upper half of the humanoid) was
manufactured and integrated with the biped to get the final robot, AUTOMI.</p>
    </div>
    <div className={style.botImage}></div>
    
    </div>
    <div className={style.botDesign}>
    <div className={style.titleH}>System Integration</div>
    <p>1)Control Architecture: While developing AUTOMI, a
centralized computing system has been implemented usingOdroid XU4, which has a Linux-based operating system
(Ubuntu 16.04) as the main computer. It supervises the
control of actuators at the joints by providing appropriate
angles and velocities, obtained after accurate computations
(refer walking algorithm, Section V).
Using distributed version control systems, with the
help of Git, the modules (designing, simulation, IP) were
distributed to multiple computers, handled by different team
members. Once the modules were completed, they were
loaded onto the main computer and integration was achieved
using Robot Operating System, abbreviated as ROS .<br></br><br></br>
2) Sensors and Actuators: Essentially AUTOMI has been
equipped with 3 different sensors to obtain data from the
surrounding environment. One Inertial measurement unit
(IMU UM7) is mounted at the Center of Mass, i.e. pelvis
joint of AUTOMI, to obtain the body’s current orientation,
eight pressure sensors (FSR-402) are fixed on each foot and
one camera (Logitech C270) is placed at the head, to get
visual data input from the surroundings.
For actuators, DYNAMIXELS have been used. DYNAMIXELS are designed to be modular and daisy chained
on any robot or mechanical design for powerful and flexible robotic movements. The DYNAMIXEL is a highperformance actuator with a fully integrated DC (Direct
Current) Motor + Reduction Gearhead + Controller + Driver
+ Network, all in one servo module actuator.
The method of serial communication between actuators
and Odroid is TTL serial (transistor-transistor logic), which
transmit one bit at a time at a specified data rate (i.e. 9600bps,
115200bps, etc).<br></br><br></br>
3) Software and Packages: ROS Kinetic Kame, an opensource meta-operating system, primarily targeted at Ubuntu
16.04, was used to integrate the different modules. Integration included receiving information from the sensors, doing
the computations on them and finally feeding the data to the</p>
  </div></>)
}
export default BotPage;