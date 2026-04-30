


---motor
update gim_policy 
set PolicyStartDt='2024-12-21 12:00:00.000',  PolicyEndDt ='2026-03-20 12:00:00.000', 
PolicyIssuanceDt='2025-03-20 12:34:29.167' , PPWDays='100'
where POLICYCODE='10000/31/25/000060'

select PolicyCode, PPWDays,PolicyIssuanceDt ,PolicyStartDt, PolicyEndDt, * from gim_policy 
where PolicyCode = '10000/31/25/000059'

--non motor
update gnm_t_phil_policy 
set POLICYSTARTDT= '2024-03-25 12:00:00.000',  POLICYENDDT ='2025-03-25 12:00:00.000',
POLICYISSUEDT='2025-03-24 12:00:00.000', Payment_Terms ='22'
where POLICYCODE='10000/48/25/000062' 

select Payment_Terms, POLICYISSUEDT, POLICYSTARTDT, POLICYENDDT,  
* from gnm_t_phil_policy where POLICYCODE='10000/48/25/000062' 

select * from sys.procedures order by create_date desc

--- mail steps
truncate table Gim_Phl_endr_automail
go
exec USP_GIM_Auto_Cancellation_Schedular
go
select Pendingdays,Reminder1,Reminder1Date,Reminder2Date, Reminder2,Reminder3,Reminder3Date ,canceldate,* from Gim_Phl_endr_automail


--- auto cancel steps
exec USP_GIM_PolicyAutoCancel_Tran
go
select * from GIM_EndrPolicy_AutoCancel


select PolicyCode, PPWDays,PolicyIssuanceDt ,PolicyStartDt, PolicyEndDt, * from GIM_Policy   order by PkpoliId desc;

select Payment_Terms, POLICYISSUEDT, POLICYSTARTDT, POLICYENDDT,  * 
from gnm_t_phil_policy where PolicyCode='10000/48/24/000005' order by pkid desc;


select  Pendingdays,PPWDays,Reminder1,Reminder1Date, Reminder2, Reminder2Date,Reminder3,Reminder3Date,
* from GIM_PHL_Endr_AutoMail where PolicyNo ='10000/11/25/000025'