SELECT * FROM unicef.giving_page_tb;

select
	gpt.giving_page_id,
	main_img_url,
    giving_name,
    ct.center_name,
    sum(gt.giving_total) as giving_page_total
from 
	giving_page_tb gpt
    left outer join center_tb ct on(ct.center_id = gpt.center_id)
    left outer join giver_tb gt on(gt.giving_page_id = gpt.giving_page_id)
group by
	gpt.giving_page_id;
    
select 
	gpt.giving_page_id,
    gpt.goal_total,
    sum(gt.giving_total)
from
	giving_page_tb gpt 
    left outer join giver_tb gt on (gt.giving_page_id = gpt.giving_page_id)
group by
	gpt.giving_page_id