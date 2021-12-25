import "./component.css";

function FAQs(){
  return <div className="FAQs text-justify">
  <div className="container py-5">
      <div className="heading pb-5" style={{paddingTop:"50px"}}>
          FAQs
      </div>
      <div class="accordion" id="accordionExample">

  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Is there any restriction on hostel in and out timings on campus ?
        </button>
      </h2>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      No. There is no restriction on timings for hostels. Students are required to make an entry in the register if they are going out for more than 2 days.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What are the facilities for washing clothes in hostels ?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      There are various automatic washing machines installed on each of the hostel floors. These fares will be divided in the maintenance bill as well as there are some pay per wash machines for better washing.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        When will the old food outlets which were shut during the pandemic will open ?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      Around 90% of food outlets are functional at present time in full capacity. And recently the masala mix which was closed due to the pandemic is open for all students.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading4">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="true" aria-controls="collapse4" style={{color:"black"}}>
        How is the system for mess rebates ?
        </button>
      </h2>
    </div>
    <div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
      <div class="card-body">
      One can fill the mess rebate form if he/she is going outside campus/ home for more than 2 days. This will retain the deduction of daily mess fees but will charge a minimum amount for functioning of the mess.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading5">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5" style={{color:"black"}}>
        Are there any night food facilities on campus ?
        </button>
      </h2>
    </div>
    <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
      <div class="card-body">
      There is a night mess for most of the hostels. They serve all kinds of food at night and are functional at least till 3am in the night.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading6">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6" style={{color:"black"}}>
        Are there any laundry facilities on campus ?
        </button>
      </h2>
    </div>
    <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
      <div class="card-body">
      Yes, there are various laundry facilities on campus, one is located beside Nilgiri hostel and Karakoram hostel.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading7">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7" style={{color:"black"}}>
        When will the new hostels be fully functional ?
        </button>
      </h2>
    </div>
    <div id="collapse7" class="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
      <div class="card-body">
      There are 3 upcoming new hostels , 2 boys and 1 girls which will be fully functional within a month or so.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading8">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="true" aria-controls="collapse8" style={{color:"black"}}>
        Where can we get hostel related information ?
        </button>
      </h2>
    </div>
    <div id="collapse8" class="collapse" aria-labelledby="heading8" data-parent="#accordionExample">
      <div class="card-body">
      There are sites for each hostel on the main BHM website fostering all the important information like caretaker/warden contact numbers to all the representative contacts and guard desk numbers.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading9">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="true" aria-controls="collapse9" style={{color:"black"}}>
        Are there any new food outlets for students and staff both ?
        </button>
      </h2>
    </div>
    <div id="collapse9" class="collapse" aria-labelledby="heading9" data-parent="#accordionExample">
      <div class="card-body">
      Yes , recently the ICH (Indian Coffee House) is the new food outlet which has been a new center of attraction for students on campus.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading10">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="true" aria-controls="collapse10" style={{color:"black"}}>
        Who all come under the BHM body ?
        </button>
      </h2>
    </div>
    <div id="collapse10" class="collapse" aria-labelledby="heading10" data-parent="#accordionExample">
      <div class="card-body">
      All the hostel level secretaries, BHM secretaries, BHM representatives come under BHM board.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading11">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="true" aria-controls="collapse11" style={{color:"black"}}>
        How to use the new facility of washing machines in the hostels ?
        </button>
      </h2>
    </div>
    <div id="collapse11" class="collapse" aria-labelledby="heading11" data-parent="#accordionExample">
      <div class="card-body">
      New State-of-the-Art based 8Kg IOT Washing machines are being installed in all hostels, where you can run the machines from your mobile phones. The laundry system is now based on a pay per wash model.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading12">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="true" aria-controls="collapse12" style={{color:"black"}}>
        Can we contribute to the BHM body in any way ?
        </button>
      </h2>
    </div>
    <div id="collapse12" class="collapse" aria-labelledby="heading12" data-parent="#accordionExample">
      <div class="card-body">
      Yes. BHM stands for hostel management and if you have any suggestions for it, you are welcome to contribute to the board and also take part in any events of the board.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading13">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="true" aria-controls="collapse13" style={{color:"black"}}>
        Can we become a part of BHM ?
        </button>
      </h2>
    </div>
    <div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordionExample">
      <div class="card-body">
      Yes , the students from all years are part of the board serving as executives or secretaries in the board including secys from each hostel.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading14">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse14" aria-expanded="true" aria-controls="collapse14" style={{color:"black"}}>
        What is the procedure of taking a room on the time of first arrival at the hostel?
        </button>
      </h2>
    </div>
    <div id="collapse14" class="collapse" aria-labelledby="heading14" data-parent="#accordionExample">
      <div class="card-body">
      On arrival, student must contact the caretaker, perform documentation and get the ownership.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading15">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse15" aria-expanded="true" aria-controls="collapse15" style={{color:"black"}}>
        Am I allowed to stay at the hostel after the end of semester?
        </button>
      </h2>
    </div>
    <div id="collapse15" class="collapse" aria-labelledby="heading15" data-parent="#accordionExample">
      <div class="card-body">
      No, students are allowed in breaks after the semesters given that they have contacted caretaker/warden beforehand and he/she is  doing a course/ project/internship within the binding of the institute.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading16">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse16" aria-expanded="true" aria-controls="collapse16" style={{color:"black"}}>
        Is use of Adult Consumptions Material allowed?
        </button>
      </h2>
    </div>
    <div id="collapse16" class="collapse" aria-labelledby="heading16" data-parent="#accordionExample">
      <div class="card-body">
      No, Use of narcotics and consumption of alcoholic beverages are strictly prohibited in the IIT Delhi.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading17">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse17" aria-expanded="true" aria-controls="collapse17" style={{color:"black"}}>
        What will happen in case of damage to the property of the hostel?
        </button>
      </h2>
    </div>
    <div id="collapse17" class="collapse" aria-labelledby="heading17" data-parent="#accordionExample">
      <div class="card-body">
      It would be considered as an offence and the punishment will be decided by hostel officials.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading18">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse18" aria-expanded="true" aria-controls="collapse18" style={{color:"black"}}>
        Can I use speakers in my hostel room?
        </button>
      </h2>
    </div>
    <div id="collapse18" class="collapse" aria-labelledby="heading18" data-parent="#accordionExample">
      <div class="card-body">
      Yes, but to the point till it is not objectionable to the neighbouring residents
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading19">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse19" aria-expanded="true" aria-controls="collapse19" style={{color:"black"}}>
        Where should I look for if I get problems related to hostel fees?
        </button>
      </h2>
    </div>
    <div id="collapse19" class="collapse" aria-labelledby="heading19" data-parent="#accordionExample">
      <div class="card-body">
      All the hostel dues are directed in accordance with the BHM, one can look upto them in case of any problem
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading20">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse20" aria-expanded="true" aria-controls="collapse20" style={{color:"black"}}>
        Can I have my relative/friend staying overnight?
        </button>
      </h2>
    </div>
    <div id="collapse20" class="collapse" aria-labelledby="heading20" data-parent="#accordionExample">
      <div class="card-body">
      Yes, but students must inform the House  Secretary/ warden before in case of short stay, for stays upto 5 days one must obtain permission from warden, and for longer stay permission is to be sought from the Dean of Students/Associate Dean of Students. Note that in all cases respective authorities have full right to deny the permission if the situation warrants.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading21">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse21" aria-expanded="true" aria-controls="collapse21" style={{color:"black"}}>
        Where should I pay my mess fees?
        </button>
      </h2>
    </div>
    <div id="collapse21" class="collapse" aria-labelledby="heading21" data-parent="#accordionExample">
      <div class="card-body">
      Mess fees are paid to mess accounts of respective hostels. 
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading22">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse22" aria-expanded="true" aria-controls="collapse22" style={{color:"black"}}>
        How is the mess fee deducted from one's payment?
        </button>
      </h2>
    </div>
    <div id="collapse22" class="collapse" aria-labelledby="heading22" data-parent="#accordionExample">
      <div class="card-body">
      Mess fee is deducted on the daily basis, which means money is charged per day of the food served 
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading23">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse23" aria-expanded="true" aria-controls="collapse23" style={{color:"black"}}>
        What would happen to mess dues if I am not at campus for more than a day?
        </button>
      </h2>
    </div>
    <div id="collapse23" class="collapse" aria-labelledby="heading23" data-parent="#accordionExample">
      <div class="card-body">
      One can fill up the Rebate form (available at the mess office of the respective hostel) for the days he/she is out of campus. Note that rebates are not applicable for one or two meals of the day, rebate is applicable for at least two day.
      </div>
    </div>
  </div>

  
  <div class="card">
    <div class="card-header" id="heading24">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse24" aria-expanded="true" aria-controls="collapse24" style={{color:"black"}}>
        How would I be informed about my mess dues?
        </button>
      </h2>
    </div>
    <div id="collapse24" class="collapse" aria-labelledby="heading23" data-parent="#accordionExample">
      <div class="card-body">
      Mess dues are shown at the end of each month by the mess office and students are required to pay if there are any.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading25">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse25" aria-expanded="true" aria-controls="collapse25" style={{color:"black"}}>
        What are the Covid guidelines that are needed to be followed on campus?
        </button>
      </h2>
    </div>
    <div id="collapse25" class="collapse" aria-labelledby="heading25" data-parent="#accordionExample">
      <div class="card-body">
      Students must wear mask in all places outside and inside hostel (except rooms), sanitize their hands regularly 
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading26">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse26" aria-expanded="true" aria-controls="collapse26" style={{color:"black"}}>
        Is a mess facility mandatory for hosters?
        </button>
      </h2>
    </div>
    <div id="collapse26" class="collapse" aria-labelledby="heading26" data-parent="#accordionExample">
      <div class="card-body">
      Yes, it is mandatory for all hostels to have a mess facility.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading27">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse27" aria-expanded="true" aria-controls="collapse27" style={{color:"black"}}>
        Are hostels self chosen or allotted to us?
        </button>
      </h2>
    </div>
    <div id="collapse27" class="collapse" aria-labelledby="heading27" data-parent="#accordionExample">
      <div class="card-body">
      Hostels are allotted to the students by the institute
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading28">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse28" aria-expanded="true" aria-controls="collapse28" style={{color:"black"}}>
        What are the institute gate timings?
        </button>
      </h2>
    </div>
    <div id="collapse28" class="collapse" aria-labelledby="heading28" data-parent="#accordionExample">
      <div class="card-body">
      All gates except gate no.1 are closed by midnight, only gate no. 1 is open 24x7 (after midnight, only for emergency use by permission of security office)
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading29">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse29" aria-expanded="true" aria-controls="collapse29" style={{color:"black"}}>
        Can we cook food (like maggie, coffee) at the hostel?
        </button>
      </h2>
    </div>
    <div id="collapse29" class="collapse" aria-labelledby="heading29" data-parent="#accordionExample">
      <div class="card-body">
      Yes, Some hostels do provide self kitchen facilities (like Nilgiri)
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading30">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse30" aria-expanded="true" aria-controls="collapse30" style={{color:"black"}}>
        What are the WiFI facilities in the campus?
        </button>
      </h2>
    </div>
    <div id="collapse30" class="collapse" aria-labelledby="heading30" data-parent="#accordionExample">
      <div class="card-body">
      WIfi facilities are available in the campus at almost all places for the students.
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="heading31">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse31" aria-expanded="true" aria-controls="collapse31" style={{color:"black"}}>
        Is there any ethernet facility provided to the students?
        </button>
      </h2>
    </div>
    <div id="collapse31" class="collapse" aria-labelledby="heading31" data-parent="#accordionExample">
      <div class="card-body">
      Yes, ethernet facilities are provided by most hostels (abundance in rooms  depends on hostels). There is a limitation of ethernet data usage (of around 10GB per week).
      </div>
    </div>
  </div>

</div>
      </div>
</div>
}

export default FAQs;
